import React, { useState } from 'react';
import axios from 'axios'
import { useHistory} from 'react-router-dom';
const Investor = () => {
    const baseurl="http://localhost:80/"
    let history=useHistory();
    const[type]=useState('investor')
    const[name,setname]=useState('')
    const[lastname,setlname]=useState('')
    const[dob,setdob]=useState('')
    const[yearexp,setyeraexp]=useState('')
    const[skils,setskill]=useState('')
    const[company,setcompany]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[address,setaddress]=useState('')
    const[no,setno]=useState('')
    const[file,setfile]=useState('')
    const[startup,setstrp]=useState('')
    const onchange=(e)=>{
        setfile(e.target.files[0])
    }
    const upload=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("type",type)
        formData.append("name",name)
        formData.append("last-name",lastname)
        formData.append("DOB",dob)
        formData.append("experience",yearexp)
        formData.append("skills",skils)
        formData.append("companies",company)
        formData.append("email",email)
        formData.append("password",password)
        formData.append("address",address)
        formData.append("mobile_no",no)
        formData.append("startup",startup)
        formData.append("file",file)
        if(formData){
            console.log(JSON.stringify(formData))
            axios.post(baseurl+"signup", formData, {
            }).then(res => {
                console.log(res.data)
                if(res.data.status==="ok"){
                alert("YOU ARE SUCCESSFULLY REGISTERED")
                history.push("/Login");
            }
               })
        }      
        else{
            console.log(JSON.stringify(formData))
            console.log("sry")
        }
    }
    
    return ( <>
    
 <div style={{"marginLeft":"450px","marginTop":"50px"}}>
 <h3 style={{"marginLeft":"60px"}}><strong>Create Your Account</strong></h3>
<form className="customform" onSubmit={upload}>
<div style={{"width":"50%" ,"marginTop":"30px"}}>
<label htmlFor="#" className='s-12 l-4'>Name</label>
<input type="text" value={name} placeholder="First Name" required onChange={e=>{setname(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Last Name</label>
<input type="text" value={lastname}  placeholder="Last Name" onChange={e=>{setlname(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>DOB</label>
<input type="date" value={dob} required onChange={e=>{setdob(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Year of Experience</label>
<input type="text" value={yearexp} required placeholder="0/1/2" onChange={e=>{setyeraexp(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Skills-Set</label>
<input type="text" value={skils} required onChange={e=>{setskill(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Company Worked In(with years)</label>
<input type="text" value={company} placeholder="google-14year" required onChange={e=>{setcompany(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Email</label>
<input type="email" value={email} required placeholder="Email" onChange={e=>{setemail(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-6'>Password</label>
<input type="password" value={password} required placeholder="Password" onChange={e=>{setpassword(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Address</label>
<input type="text" value={address} placeholder="Address" required onChange={e=>{setaddress(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Mobile-No</label>
<input type="tel"placeholder="123-345-456-0" value={no} required onChange={e=>{setno(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Image of Candidate</label>
<input type="file" name="myFiles" onChange={onchange} required />
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Startup(if any)</label>
<input type="text" placeholder="Experience" value={startup} required onChange={e=>{setstrp(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>

<button type="submit">Submit Button</button>

</div>

</form>
</div>





    </> );
}
 
export default Investor;