import React,{useState} from 'react';
import axios from 'axios'
import { useHistory} from 'react-router-dom';
import {Link} from "react-router-dom";
const Login = () => {
    const baseurl="http://localhost:80/"
    let history=useHistory();
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    localStorage.setItem("islogged","false")
    if(email==="main@gmail.com"&&password==="admin123"){
        history.push("/Admin");
    }
    
    const upload=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("email",email)
        formData.append("password",password)
        if(formData){
            console.log(JSON.stringify(formData))
            axios.post(baseurl+"login", {
                email:email,
        password:password,
            }).then(res => {
                console.log(res.data)
                if(res.data.status==="ok"){
                    console.log(res.data.token)
                   
                    localStorage.setItem("islogged","true")
                history.push("/");
            }
           
            else{
                alert("pleasee enter correct info")
            }
               })
        }      
        else{
            console.log(JSON.stringify(formData))
            alert("please enter correct info")
            
        }
    
    }

    return ( <>


<div style={{"marginLeft":"450px","marginTop":"200px"}}>
<h3 style={{"marginLeft":"60px"}}><strong>Welcome Buddy!!</strong></h3>
                    <form className="customform">
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Email</label>
<input type="email" value={email} required placeholder="Email" onChange={e=>{setemail(e.target.value)}}/>

</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-6'>Password</label>
<input type="password" value={password} required placeholder="Password" onChange={e=>{setpassword(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>

<button type="submit" onClick={upload}>Submit Button</button>

</div>

</form>
<p style={{"marginLeft":"160px"}}>DON'T HAVE AN ACCOUNT??</p>
<p style={{"marginLeft":"160px"}}><Link to="/Investor">Register as Investor??</Link></p>
<p style={{"marginLeft":"160px"}}><Link to="/Startup">Register your Startup??</Link></p>
<p style={{"marginLeft":"160px"}}><Link to="/Learner">Register as Learner??</Link></p>
</div>


    </> );
}
 
export default Login;