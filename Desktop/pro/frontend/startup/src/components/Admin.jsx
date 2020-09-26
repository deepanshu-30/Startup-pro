import React from 'react';
import {Link} from "react-router-dom";
const Admin = () => {
    return ( <>
    <div>
      &lt; <nav>
        <div className="line">
          {/* Mobile version of logo */}
          <div className="logo logo-small">
              
            <a >CONNECT <br /><strong>2START</strong></a>
          </div>  
          <div className="top-nav">              
            <div className="s-12 l-5">
              <ul className="right top-ul chevron">
        
                <li><Link to="/Featuredform">Featured Story</Link>
                </li>
                <li>
                <Link to="/Internform">Internships</Link>
                </li>
                <li>
                <Link to="/Registeredintern">Registered Intern</Link>
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
                
               
              <li>
                <Link to="/Eventform">Events</Link>
                </li>
                <li>
                <Link to="/Feedbackshow">Feedback Show</Link>
                </li>
                <li>
                <Link to="/Showregevents">EVENT REGISTERED</Link>
                </li>
                <li><Link to="/Logout">Logout</Link>
                  
                </li>
              </ul> 
            </div>
          </div>
        </div>
      </nav>
    </div>
    </> );
}
 
export default Admin;