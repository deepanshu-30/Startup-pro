import React,{useState} from 'react';
import axios from 'axios'
import { useHistory} from 'react-router-dom';
const Internshipform = () => {
    const baseurl="http://localhost:80/"
    let history=useHistory();
    const[email,setemail]=useState('')
    const[story,setstory]=useState('')
    const[name,setname]=useState('')
   
    const uploads=(e)=>{
        e.preventDefault();
            axios.post(baseurl+"feedback", {
                name:name,
                email:email,
                feedback:story
            }).then(res => {
                console.log(res.data)
                if(res.data.status==="ok"){
                alert("THANKS TO GIVE YOUR TIME")
                 history.push("/");
            }
               })
    }      

    return ( <>
    <div style={{"marginLeft":"450px","marginTop":"50px"}}>
<h3 style={{"marginLeft":"60px"}}><strong>FEEDBACK</strong></h3>
<form className="customform"onSubmit={uploads}>

<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Name</label>
<input type="text" name="myFiles" value={name} placeholder="abc" onChange={e=>{setname(e.target.value)}}/>
</div>

<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Email</label>
<input type="text" name="myFiles" value={email} placeholder="abc" onChange={e=>{setemail(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Feedback</label>
<input type="text" value={story} placeholder="web....." required onChange={e=>{setstory(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>

<button type="submit">Apply</button>

</div>
</form>
</div>

    </> );
}

 
export default Internshipform;