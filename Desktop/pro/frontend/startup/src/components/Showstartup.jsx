import React,{useState,useEffect} from 'react';
import{useParams} from 'react-router-dom'
import Base from './Base'
import axios from 'axios'
const ShowStartup = () => {
  const baseurl="http://localhost:80/"
    const {userid}=useParams()
    const[startup,setstartup]=useState('')
    useEffect(()=>
    {
        async function fech(){
        await axios.post(baseurl+'sendstartup',{
          id:userid,
        }).then(repond=>{       
          console.log(repond.data.docs[0])
          setstartup(repond.data.docs[0])
          
        
        })
        
        
         
     }
     
     fech();
    },
    []
    )
  
    return ( <>
    {startup ?
    <Base>
    
   <div id="carousel">
  <div id="header-carousel" className="owl-carousel owl-theme">
    <div className="item">
    <img src={`${baseurl}${startup._id}_3_startup.jpg`} alt="" style={{"border":"5px solid","height":"300px","width":"100%"}}/>   
      <div className="carousel-text">
        <div className="line">
          <div className="s-12 l-9">
    <h2 style={{"border":"5px solid"}}>{startup.name}</h2>
          </div>
          <div className="s-12 l-9">
            <p style={{"border":"5px solid"}}>{startup.domain}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* ddddddddddddddddddddddddddddddddddddddddd */}
<div id="first-block">
  <div className="line">
    <h2>BIO</h2>
    <p className="subtitile">{startup.bio}
    </p>
    <div className="margin">
      <div className="s-12 m-6 l-3 margin-bottom">
        <i className="icon-sli-people icon2x" />
        <h3>EMPLOYESS No</h3>
    <h3>{startup.emoloyes}</h3>
      </div>
      <div className="s-12 m-6 l-3 margin-bottom">
        <i className="icon-sli-shield icon2x" />
        <h3>Company Founded</h3>
        <h3>{startup.year}</h3>
      </div>
      <div className="s-12 m-6 l-3 margin-bottom">
        <i className="icon-sli-puzzle icon2x" />
        <h3>Social Link</h3>
    <h3>{startup.link}</h3>
      </div>
      <div className="s-12 m-6 l-3 margin-bottom">
        <i className="icon-sli-globe-alt icon2x" />
        <h3>Location</h3>
    <h3>{startup.location}</h3>
      </div>
    </div>
  </div>
</div>
{/* ffffffffffffffffffffffffffffffffffff */}
<div id="third-block">
  <div className="line">
    <h2>Teammates</h2>
    <p className="subtitile">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    </p>
    <div className="margin">
      <div className="s-12 m-6 l-3">
      <img src={`${baseurl}${startup._id}_0_startup.jpg`} style={{"border":"5px solid","height":"200px","width":"250px","marginLeft":"20px"}} alt="" />   
        <p className="subtitile">FOUNDER
        </p>
      </div>
      <div className="s-12 m-6 l-3">
      <img src={`${baseurl}${startup._id}_1_startup.jpg`} style={{"border":"5px solid","height":"200px","width":"250px"}} alt="" />    
        <p className="subtitile">COFUNDER
        </p>
      </div>
      <div className="s-12 m-6 l-3">
      <img src={`${baseurl}${startup._id}_2_startup.jpg`} style={{"border":"5px solid","height":"200px","width":"250px"}} alt=""/>     
        <p className="subtitile">OTHER 
        </p>
      </div>
    
    </div>
  </div>
</div>
<h2 style={{"textAlign":"center"}}>THANKS FOR VISITING USSS!!!!!!!!!!!!!!!!!!!!!!!!!</h2>
    </Base>
    :<h2>loding</h2>}


    </> );
}
 
export default ShowStartup;