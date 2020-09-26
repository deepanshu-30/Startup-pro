require('dotenv').config();
const express=require('express');
const bodyParser=require("body-parser");
const cors=require("cors");
let bcrypt = require('bcrypt');
let saltRounds = 10;
const jwt=require('jsonwebtoken');
const SK="Deep2323";
var multer = require('multer')
var fs = require('fs');
const path = require('path');

//extra requriement
const app=express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

// CONNECTION OF MONGOOSE DATA BASEC TO THE SERVER
const {MongoClient, ObjectId}=require('mongodb');
const client=new MongoClient(process.env.Database,{useNewUrlParser: true ,useUnifiedTopology: true,useCreateIndex: true }) ;

client.connect((err,db)=>{
  if(err){
      
  console.log(err);
  }

          mydb=db;
      console.log("connected");    

 
})
//connecting to a file system to upload the image
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    console.log("Llllllllllllllllllllllllllllll")
    console.log(file)
    cb(null, "temp.jpg"+"_"+file.originalname)
}
})
var upload = multer({ storage: storage })
app.use(express.static(path.join(__dirname, 'uploads')));

//end of the file upload
//.....................middleware to secure the backend..............................
const verifytoken=(req,res,next)=>{
  
  const {authorization}=req.headers
  if(!authorization) {return res.status(401).json({error:"you must be logged in"})}
  const token=authorization
  jwt.verify(token,SK,(err,payload)=>{
      if(err) return res.status(401).json({error:"u must have to loggd in "})
      const {id}=payload
      let search=mydb.db('stratup').collection('users');
    search.findOne({id},(err,docs)=>{
      if(docs){
        req.userdata=docs
        next();
      }
      else{res.status(422)}
    })

  })
  
  
}
//end of midelware

//routes ARE THERE
  //1...LOGIN ROUTES FOR THE USERS..................................
  app.post('/login',bodyParser.json(),(req,res)=>{
    //  console.log(req.body)
    const{email,password}=req.body;
    if(!email || !password) return res.status(422)
    
    let search=mydb.db('stratup').collection('users');
    search.find({email:email}).toArray((err,docs)=>{
        if(!err && docs.length>0){
          console.log(docs)
           bcrypt.compare(password, docs[0].password, function(err, result) {
              if(result){
                console.log(docs[0]._id)
                const user={
                  id:docs[0]._id,
                }
                jwt.sign({user},SK,(err,token)=>{
                  if(!err){
                  // {res.status(200).json({token})
                    res.send({status:"ok",token:token})  
                }
                  else{res.status(402)}
                })
               
            
              }
              else{
                res.send({status:"401"}) 
            }
        
          });
               
          
        }
        else{
          res.send({status:"sry",message:"please enter write info"})
        }    })
})
  //END OF LOGIN ROUTES
  //..........................................................................................................//
  //2...Signup Routes for the users
  app.post('/signup', upload.array('file'), (req, res)=>{
    //  console.log(req.body); 
    //  console.log(JSON.stringify(req.file)) 
    const {email,password} =req.body 
    bcrypt.hash(password, saltRounds, function(err, hash) {
        if(!err){
            req.body.password=hash
            let user=mydb.db('stratup').collection('users');
            user.find({email:email}).toArray((err,docs)=>{
            
                if(!err && docs.length>0){
                    res.json({
                        status:"300",
                        message:"USER ALREADY EXISTS"
                    });
                }
                else {
                    user.insertOne(req.body,(err,r)=>{
                        
                        if(!err){
                          
                          req.files.forEach(function(value, index){
                            console.log("((((((())))))))))))))))))))))))))")
                            console.log(value)
                            
                             console.log("result of insert is _id -> " + r.insertedId);
                            
                            
                            fs.renameSync('./uploads/temp.jpg'+"_"+value.originalname, './uploads/' + r.insertedId+"_"+index+"_"+req.body.type+'.jpg');
                            // res.send({ msg: "imge sucessfully inserted", status: 'OK', description: 'img detail created and file uploaded' });
                          })
                          res.send({status:"ok"})
                            
                        

                            
                        }
                        else{
                            res.json({
                                status:"401"
                            })
                        }
                    })
                }
                
            })
          }
    });
    })

  //END OF THE SIGNUP ROUTES
  //4...send all user
  app.get('/send', (req, res) => {

    const collection = mydb.db('stratup').collection('users');

    collection.find().toArray(function (err, docs) {
      
      
        res.send(docs);
    });

})
  //end
  // #4..Featured story
  app.post('/fstory', upload.array('file'), (req, res)=>{
    let story=mydb.db('stratup').collection('featurestoy');
  
      story.insertOne(req.body,(err,r)=>{
                        
        if(!err){
          
          req.files.forEach(function(value, index){
            console.log("((((((())))))))))))))))))))))))))")
            console.log(value)
            
             console.log("result of insert is _id -> " + r.insertedId);
            
            
            fs.renameSync('./uploads/temp.jpg'+"_"+value.originalname, './uploads/' + r.insertedId+"_"+index+'.jpg');
            // res.send({ msg: "imge sucessfully inserted", status: 'OK', description: 'img detail created and file uploaded' });
          })
          res.send({status:"ok"})
            
        

            
        }
        else{
            res.json({
                status:"401"
            })
        }
    })


    })

  //  end
    // 5............send all story
    app.get('/story', (req, res) => {

      const collection = mydb.db('stratup').collection('featurestoy');
  
      collection.find().toArray(function (err, docs) {
        
        
          res.send(docs);
      });
  
  })
    // 
// 6...Internship
app.post('/intern', upload.array('file'), (req, res)=>{
  let story=mydb.db('stratup').collection('internships');

    story.insertOne(req.body,(err,r)=>{
                      
      if(!err){
        
        req.files.forEach(function(value, index){
          console.log("((((((())))))))))))))))))))))))))")
          console.log(value)
          
           console.log("result of insert is _id -> " + r.insertedId);
          
          
          fs.renameSync('./uploads/temp.jpg'+"_"+value.originalname, './uploads/' + r.insertedId+"_"+index+'.jpg');
          // res.send({ msg: "imge sucessfully inserted", status: 'OK', description: 'img detail created and file uploaded' });
        })
        res.send({status:"ok"})
          
      

          
      }
      else{
          res.json({
              status:"401"
          })
      }
  })


  })

//  end
//7....send internships
app.get('/sendintern', (req, res) => {

  const collection = mydb.db('stratup').collection('internships');

  collection.find().toArray(function (err, docs) {
    
    
      res.send(docs);
  });

})
// 
// 8...Events
app.post('/events', upload.array('file'), (req, res)=>{
  let story=mydb.db('stratup').collection('events');

    story.insertOne(req.body,(err,r)=>{
                      
      if(!err){
        
        req.files.forEach(function(value, index){
          console.log("((((((())))))))))))))))))))))))))")
          console.log(value)
          
           console.log("result of insert is _id -> " + r.insertedId);
          
          
          fs.renameSync('./uploads/temp.jpg'+"_"+value.originalname, './uploads/' + r.insertedId+"_"+index+'.jpg');
          // res.send({ msg: "imge sucessfully inserted", status: 'OK', description: 'img detail created and file uploaded' });
        })
        res.send({status:"ok"})
          
      

          
      }
      else{
          res.json({
              status:"401"
          })
      }
  })


  })

//  end
//9....send Events
app.get('/sendevents', (req, res) => {

  const collection = mydb.db('stratup').collection('events');

  collection.find().toArray(function (err, docs) {
    
    
      res.send(docs);
  });

})
// 
// 10...Feedback
app.post('/feedback',bodyParser.json(),(req,res)=>{
  console.log(req.body)
  let upl=mydb.db('stratup').collection('feedback');
    upl.insertOne(req.body,(err,r)=>{
      if(!err){
        res.send({status:"ok"})
      }
      else
      {
        res.send({status:422})
      }
    })
})

// 11...send feedback
app.get('/sendfeeds', (req, res) => {

  const collection = mydb.db('stratup').collection('feedback');

  collection.find().toArray(function (err, docs) {
    
    
      res.send(docs);
  });

})
// 
// 12...Event registerd
app.post('/registevents',bodyParser.json(),(req,res)=>{
  console.log(req.body)
  let upl=mydb.db('stratup').collection('eventreg');
    upl.insertOne(req.body,(err,r)=>{
      if(!err){
        res.send({status:"ok"})
      }
      else
      {
        res.send({status:422})
      }
    })
})
// end
// 13...send all events
app.get('/sendregevents', (req, res) => {

  const collection = mydb.db('stratup').collection('eventreg');

  collection.find().toArray(function (err, docs) {
    
    
      res.send(docs);
  });

})
// end
// 1...Intern registerd
app.post('/registintern',bodyParser.json(),(req,res)=>{
  console.log(req.body)
  let upl=mydb.db('stratup').collection('internreg');
    upl.insertOne(req.body,(err,r)=>{
      if(!err){
        res.send({status:"ok"})
      }
      else
      {
        res.send({status:422})
      }
    })
})
// end
// 13...send all internn
app.get('/sendregintern', (req, res) => {

  const collection = mydb.db('stratup').collection('internreg');

  collection.find().toArray(function (err, docs) {
    
    
      res.send(docs);
  });

})
// end
// 14...find the startup of a given id
 app.post('/sendstartup',bodyParser.json(),(req,res)=>{
  console.log("hey")
  console.log(req.body)
  var ids=req.body.id
  console.log(ids)
  let  user=mydb.db('stratup').collection('users');
 
  user.find({_id:ObjectId(req.body.id)}).toArray((err,docs)=>{
    console.log(docs)
    console.log(req.body.id)
    
    if(!err &&docs.length>0){
      res.send({status:"ok",docs:docs})
    }
    else{
      res.send({message:"sry no docs found"})
    }
  })
  
})
//.............................................................................................................//

// // SERVER IS LISTEN ON ANY PORT
app.listen(80,()=>{console.log("serveris runnig at 80")})