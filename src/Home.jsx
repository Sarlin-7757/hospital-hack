import React from 'react'
import HomepageCards from './components/HomepageCards'
import {Link} from "react-router-dom"
import Header from './components/Header'
export const Home = () => {
  return (
    <div>
      <Header />
        <h1 style={{color:"#fff" , fontSize:"50px" , position:"relative" , top:"70px" , left:"70px"} }>Hello Saransh.  </h1>
 <div style={{
        
        "padding":"20px",
        // "width" : "75%",
        "marginTop":"30px",
        "display": "flex",
        "align-content": "center",
        "justify-content": "space-around",
        "margin": "20px"
     } 
    }>
        
        <Link to="/hospitals" style={{textDecoration:"none"}}>
        <HomepageCards title="Hospitals Near Me"/>
        </Link>
        {/* </Route> */}
        <Link to="/doctors" style={{textDecoration:"none"}}>
        <HomepageCards title="Doctors Near Me" />
        </Link> 
        
        <Link to="/preauth" style={{textDecoration:"none"}}>
        <HomepageCards title="Pre-Auth form"  />
        </Link>
       
        <HomepageCards title="Past Claim" style={{textDecoration:"none"}} />
</div>
    </div>
   
  )
}

