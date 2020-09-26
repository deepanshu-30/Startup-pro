import React from 'react';
import {Link} from "react-router-dom";

const Nave = () => {
  var token=localStorage.getItem("islogged")
  
  if(token==="true"){
    return(<><div>
      &lt; <nav>
        <div className="line">
          {/* Mobile version of logo */}
          <div className="logo logo-small">
              
            <a>CONNECT <br /><strong>2START</strong></a>
          </div>  
          <div className="top-nav">              
            <div className="s-12 l-5">
              <ul className="right top-ul chevron">
        
                <li><Link to="/">Featured Story</Link>
                </li>
                <li>
                <Link to="/Internship">Internships</Link>
                </li>
                <li>
                <Link to="/Events">Events</Link>
                </li>
              </ul>
            </div>
            <ul className="s-12 l-2">
              <li className="logo hide-s hide-m">
                <a href="index.html">CONNECT <br /><strong>2START</strong></a>
              </li>
            </ul>
            <div className="s-12 l-5">
              <ul className="top-ul chevron">
                <li><Link to="/Feedback">Feedback</Link>
                </li>
                <li><Link to="/Feature">Wants to Featured</Link>
                </li>
                <li><Link to="/About">About Us</Link>
                </li>
         
                <li>
                <Link to="/Logout">Logout</Link>
                </li>
              </ul> 
            </div>
          </div>
        </div>
      </nav>
    </div>
    
    </>);
  }
  else if(token===null ||token==="false"){
    return ( <>
   <div>
      &lt; <nav>
        <div className="line">
          {/* Mobile version of logo */}
          <div className="logo logo-small">
              
            <a href="index.html">CONNECT <br /><strong>2START</strong></a>
          </div>  
          <div className="top-nav">              
            <div className="s-12 l-5">
              <ul className="right top-ul chevron">
        
                <li><Link to="/">Featured Story</Link>
                </li>
                <li>
                <Link to="/Internship">Internships</Link>
                </li>
                <li>
                <Link to="/Events">Events</Link>
                </li>
              </ul>
            </div>
            <ul className="s-12 l-2">
              <li className="logo hide-s hide-m">
                <a >CONNECT <br /><strong>2START</strong></a>
              </li>
            </ul>
            <div className="s-12 l-5">
              <ul className="top-ul chevron">
                <li><Link to="/Feedback">Feedback</Link>
                </li>
               
                <li><Link to="/About">About Us</Link>
                </li>
                
                <li><Link to="/Login">Login</Link>
                  
                </li>
              </ul> 
            </div>
          </div>
        </div>
      </nav>
    </div>

    </> );}
}
 


export default Nave;