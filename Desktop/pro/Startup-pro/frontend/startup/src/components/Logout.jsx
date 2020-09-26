import React from 'react';
import { useHistory} from 'react-router-dom';
const Logout = () => {
    localStorage.removeItem("token")
    localStorage.setItem("islogged","false")
    let history=useHistory();
  history.push("/");
 
    return ( <>

    </> );
}
 
export default Logout;