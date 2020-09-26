import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
   
    
  } from "react-router-dom";
  
  import Dashboard from './components/Dashboard'
  import Login from './components/Login'
  import Inverstor from './components/Investor'
  import Startup from './components/Startup'
  import Learner from './components/Learner'
import About from './components/About';
import Logout from './components/Logout';
import Feature from './components/Feature';
import Admin from './components/Admin';
import Featuredform from './components/Featuredform'
import Internshipform from './components/Internshipform';
import Internship from './components/Internship';
import Eventform from './components/Eventform';
import Events from './components/Events';
import Feedback from './components/Feedback';  
import Feedbackshow from './components/Feedbackshow';  
import Showregevents from './components/Showregevents';
import Registeredintern from'./components/Registeredintern'
import ShowStartup from './components/Showstartup';

const Routers = () => {
    
    return ( <>
<Router>

      
        

                    <Switch>
                    <Route exact path="/">
                    <Dashboard/>
                     </Route>
                     <Route exact path="/Login">
                    <Login/>
                     </Route>
                     <Route exact path="/Investor">
                    < Inverstor/>
                     </Route>
                     <Route exact path="/Startup">
                    <Startup/>
                     </Route>
                     <Route exact path="/Learner">
                    <Learner/>
                     </Route>
                     <Route exact path="/About">
                    <About/>
                     </Route>
                     <Route exact path="/Logout">
                    <Logout/>
                     </Route>
                     <Route exact path="/Feature">
                    <Feature/>
                     </Route>
                     <Route exact path="/Admin">
                    <Admin/>
                     </Route>
                     <Route exact path="/Featuredform">
                    <Featuredform/>
                     </Route>
                     <Route exact path="/Internform">
                    <Internshipform/>
                     </Route>
                     <Route exact path="/Internship">
                    <Internship/>
                     </Route>
                     <Route exact path="/Eventform">
                    <Eventform/>
                     </Route>
                     <Route exact path="/Events">
                    <Events/>
                     </Route>
                     <Route exact path="/Feedback">
                    <Feedback/>
                     </Route>
                     <Route exact path="/Feedbackshow">
                    <Feedbackshow/>
                     </Route>
                     <Route exact path="/Showregevents">
                    <Showregevents/>
                     </Route>
                     <Route exact path="/Registeredintern">
                    <Registeredintern/>
                     </Route>
                     <Route  path="/Startup/:userid">
                    <ShowStartup/>
                     </Route>
                    </Switch>
                </Router>
    </> );
}
 
export default Routers;