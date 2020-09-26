import axios from 'axios'
import React,{useEffect,useState} from 'react';
import './feeds.css';
const Feedbackshow = () => {
  const baseurl="http://localhost:80/"
    const[feeds,setintern]=useState([])
    useEffect(()=>
    {
        async function fech(){
        await axios.get(baseurl+'sendfeeds').then(repondd=>{
        console.log(repondd.data)
         setintern(repondd.data)
        
        })
        
        
         
     }
     
     fech();
    },
    []
    )

    return ( <>
    <div id="content">
            <div className="line">
               <div className="margin">
                  <div className="s-12 m-12 l-12">
                    
                         <div className="feed">
{/* ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff */}
<table>
  <thead>
    <th>NAME</th>
    <th>EMAIL</th>
    <th>FEEDBACK</th>
  </thead>
  <tbody>
  {feeds.map(d=>(
    <tr key={d._id}>
    <td>{d.name}</td>
  <td>{d.email}</td>
  <td>{d.feedback}</td>
  </tr>
  ))}
 </tbody>
</table>
{/* dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
                         
                    
                </div>
                  </div>
                  
                
                 
                 
                  
               </div>
            </div>
         </div>
    </> );
}
 
export default Feedbackshow;