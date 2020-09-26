import axios from 'axios'
import React,{useEffect,useState} from 'react';
import './feeds.css';
const Showregevents = () => {
  const baseurl="http://localhost:80/"
    const[feeds,setintern]=useState([])
    useEffect(()=>
    {
        async function fech(){
        await axios.get(baseurl+'sendregevents').then(repondd=>{
        console.log(repondd.data)
         setintern(repondd.data)
         console.log(feeds)
        
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
    <th>EVENT ID</th>
    <th>DATE</th>
  </thead>
  <tbody>
  {feeds.map(d=>(
    <tr key={d._id}>
    <td>{d.name}</td>
  <td>{d.email}</td>
  <td>{d.id}</td>
  <td>{d.date}</td>
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
 
export default Showregevents;