import React, { useState } from 'react';
import axios from 'axios'
import { useHistory} from 'react-router-dom';
const Featuredform = () => {
    const baseurl="http://localhost:80/"
    let history=useHistory();
    const[file,setfile]=useState('')
    const[story,setstory]=useState('')
    const onchanges=(e)=>{
        setfile(e.target.files)
    }
    const uploads=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("story",story)
        for(var x = 0; x<=file.length; x++) {
            formData.append("file",file[x])
        }
        if(formData){
            console.log(JSON.stringify(formData))
            axios.post(baseurl+"fstory", formData, {
            }).then(res => {
                console.log(res.data)
                if(res.data.status==="ok"){
                alert("YOU ARE SUCCESSFULLY REGISTERED")
                 history.push("/Admin");
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
<h3 style={{"marginLeft":"60px"}}><strong>Give Your Feedback</strong></h3>
<form className="customform"onSubmit={uploads}>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Logo and Images of Employes</label>
<input type="file" name="myFiles" multiple onChange={onchanges}/>
</div>
<div style={{"width":"50%"}}>
<label htmlFor="#" className='s-12 l-4'>Story</label>
<input type="text" value={story} placeholder="web....." required onChange={e=>{setstory(e.target.value)}}/>
</div>
<div style={{"width":"50%"}}>

<button type="submit">Submit Button</button>

</div>
</form>
</div>

    </> );
}
 
export default Featuredform;