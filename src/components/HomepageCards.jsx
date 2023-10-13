// import {Link} from 'react-router-dom'
import "./HomepageCards.css"
const HomepageCards = ({title}) =>{
    return(
    <div>

       <div  style={{backgroundColor:"#131313" , marginTop:"200px"}}>
    
      <div className="card">
        <h2 className="card-title">{title}</h2>
      </div>
       </div> 
 
    </div>
   )
}

export default HomepageCards;