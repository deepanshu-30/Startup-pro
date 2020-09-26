import React,{useEffect, useState} from 'react';
import Base from './Base'
import axios from 'axios'
import './dash.css';
import {Link} from 'react-router-dom';
const Dashboard = () => {
  const baseurl="http://localhost:80/"
  
  var a=localStorage.getItem("islogged")
  const[post,setpost]=useState([])
  const[learner,setlearner]=useState([])
  const[story,setstory]=useState([])
  var[end,setend]=useState(4)
  var[endd,setendd]=useState(4)
  useEffect(()=>
  {
      async function fech(){
    await axios.get(baseurl+'send').then(repond=>{
        
        var filterdata=repond.data.filter(d=>{
          return d.type==="investor"
        })
        var filterstartup=repond.data.filter(d=>{
          return d.type==="startup"
        })
        setpost(filterdata)
        setlearner(filterstartup)
      })
      await axios.get(baseurl+'story').then(repondd=>{

        var datas=repondd.data.slice(-1)
       setstory(datas[0])
      
      })
      
      
       
   }
   
   fech();
  },
  []
  )
const changeme=()=>{
  setend(end=end+4)
}
const changemee=()=>{
  setendd(endd=endd+4)
}

    return ( <>
{story?
<Base>
<div id="content">
  <div className="line">
    <span className="s-12 m-12 l-8 center">
        <h3 style={{"marginLeft":"55px"}}><strong>Featured Story</strong></h3>
        
        <img src={`${baseurl}${story._id}_3.jpg`} alt="" style={{"border":"2px solid","width":"250px","height":"250px","marginLeft":"100px","float":"left"}}/>
       <div style={{"marginLeft":"300px"}}>
       <p className="s-12 m-12 l-8 center"><b> <i>  {story.story}  </i></b>
    </p>
       </div>
       
        
    </span>
    <h2>TEAMMATES</h2>
    <img src={`${baseurl}${story._id}_0.jpg`} alt="" style={{"border":"5px solid","width":"200px","height":"150px","marginLeft":"180px","float":"left"}}/>
        <img src={`${baseurl}${story._id}_1.jpg`} alt="" style={{"border":"5px solid","width":"200px","height":"150px","marginLeft":"180px","float":"left"}}/>
        <img src={`${baseurl}${story._id}_2.jpg`} alt="" style={{"border":"5px solid","width":"200px","height":"150px","marginLeft":"180px","float":"left"}}/>
      
    
  </div>
</div>

{/* ffffffffffffffffffffffffffff */}
<div id="first-block">
  <div className="line">
    <h2>INVESTERS</h2>
    <p className="subtitile">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </p>
    <div className="margin">
    {post.slice(0,end).map((d,index)=>(
         <div className="s-12 m-6 l-3 margin-bottom"key={d._id}>
           
         <img src={`${baseurl}${d._id}_0_investor.jpg`} alt="" style={{"marginLeft":"30px","height":"260px","border":"3px solid","width":"280px"}}/>
         <h3> <a href="www.google.com">{d.name}</a> </h3>
       </div> 
    ))}
     
    </div>
    <i className="fa fa-circle-o-notch fa-spin" onClick={changeme} style={{"float":"left"}}></i>
    <i className="fa fa-circle-o-notch fa-spin" onClick={changeme} style={{"float":"right"}}></i>
  </div>
</div>
{/* ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
<div id="first-block">
  <div className="line">
    <h2>StartUps</h2>
    <p className="subtitile">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </p>
    <div className="margin">
    {learner.slice(0,endd).map((d,index)=>(
         <div className="s-12 m-6 l-3 margin-bottom"key={d._id}>
           
         <img src={`${baseurl}${d._id}_3_startup.jpg`} alt="" style={{"marginLeft":"30px","height":"200px","border":"5px solid","width":"300px"}}/>
         <h3><Link to={"/Startup/"+d._id}>{d.name}</Link></h3>
       </div> 
    ))}
     
    </div>
    <i className="fa fa-circle-o-notch fa-spin"onClick={changemee} style={{"float":"left"}}></i>
    <i className="fa fa-circle-o-notch fa-spin" onClick={changemee}style={{"float":"right"}}></i>
  </div>
</div>
{/* fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}

</Base>

:<h2>loding</h2>}

    </> );
}
 
export default Dashboard;