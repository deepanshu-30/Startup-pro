import React,{useEffect, useState} from 'react';
import Base from './Base'
import axios from 'axios'
import { useHistory} from 'react-router-dom';
import './dash.css';
const Events = () => {
   const baseurl="http://localhost:80/"
   
    let history=useHistory();
    const[interns,setintern]=useState([])
    useEffect(()=>
    {
        async function fech(){
        await axios.get(baseurl+'sendevents').then(repondd=>{
         setintern(repondd.data)
        
         
        
        })
        

         
     }
     
     fech();
    },
    [] 
    )
    const reg=(a,b)=>{
      
        
        var email=prompt("enter the email")
      
         axios.post(baseurl+"registevents", {
            name:b,
            email:email,
            id:a,
            date:new Date()
        }).then(res => {
            console.log(res.data)
            if(res.data.status==="ok"){
            alert("YOU ARE SUCCESSFULLY REGISTERED WE WILL SEND ALL DETAILS ON YOUR GIVEN EMAIL..")
             history.push("/");
        }
           })
    }

    return ( <>

    <Base>
    <div id="content">
            <div className="line">
               <div className="margin">
                  <div className="s-12 m-12 l-12">
                     {interns.map(d=>(
                         <div className="feed"key={d._id}>
                         <div className="content-block margin-bottom">
                        <img src={`${baseurl}${d._id}_0.jpg`} alt="" className="c" style={{"width":"150px"}}/>
                   <h3>{d.name}</h3>
                   <p>{d.story}.
                   </p>

                   <button onClick={()=>{reg(d._id,d.name)}}>REGISTER HERE</button>
                </div>
                </div>
                     ))}
                  </div>
                  
                
                 
                 
                  
               </div>
            </div>
         </div>
    </Base>
    </> );
}
 
export default Events;    