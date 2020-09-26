import React from 'react';
import Nave from './Nave';
import Footer from './Footer'
const Base = ({children}) => {
    return ( 
        <>
<Nave/>
<div style={{"marginTop":"100px"}}></div>
{children}

<Footer/>



  


        </>
     );
}
 
export default Base;