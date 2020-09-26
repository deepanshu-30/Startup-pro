import React, { useState } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
const Startup = () => {
    const baseurl="http://localhost:80/"
    let history=useHistory();
    const[type]=useState('startup')
    const[name,setname]=useState('')
    const[year,setyear]=useState('')
    const[employe,setemp]=useState('')
    const[domain,setdomain]=useState('')
    const[link,setlink]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')
    const[locations,setlocation]=useState('')
    const[bio,setbio]=useState('')
    const[file,setfile]=useState('')
    const onchanges=(e)=>{
            setfile(e.target.files)
        }
        const uploads=(e)=>{
            e.preventDefault();
            const formData=new FormData();
            formData.append("type",type)
            formData.append("name",name)
            formData.append("year",year)
            formData.append("emoloyes",employe)
            formData.append("domain",domain)
            formData.append("link",link)
            formData.append("email",email)
            formData.append("password",password)
            formData.append("location",locations)
            formData.append("bio",bio)
            for(var x = 0; x<=file.length; x++) {
                formData.append("file",file[x])
            }
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
<form className="customform"onSubmit={uploads}>
<div style={{"width":"50%" ,"marginTop":"30px"}}>
<label htmlFor="#" className='s-12 l-4'>Name</label>
<input type="text" value={name} placeholder="First Name" required onChange={e=>{setname(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Year of Foundation</label>
<input type="text" value={year} required placeholder="0/1/2" onChange={e=>{setyear(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Employes</label>
<input type="text" value={employe} placeholder="10/20" required onChange={e=>{setemp(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Logo and Images of Employes</label>
<input type="file" name="myFiles" multiple onChange={onchanges}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Domain of Working</label>
<input type="text" value={domain} placeholder="web/app/marketing" required onChange={e=>{setdomain(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Social Media</label>
<input type="text" value={link} placeholder="f@gmail.com" required onChange={e=>{setlink(e.target.value)}}/>
</div>

<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Location</label>
<input type="text" value={locations} placeholder="Delhi" required onChange={e=>{setlocation(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>BIO</label>
<input type="text" value={bio} placeholder="we arr.........." required onChange={e=>{setbio(e.target.value)}}/>
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

<button type="submit">Submit Button</button>

</div>

</form>
</div>



    </> );
}
 
export default Startup;