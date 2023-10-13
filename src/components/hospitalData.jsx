import HospitalsCard from "./HospitalsCard";
import "./hospital.css"
const hospitalData = ()=>{
    return(
        <div className="topcontainer">
            <div
            style={{
                marginTop:"30px",
                fontSize:"30px"
            }}>
                <h1 style={{color:"#fff" , marginLeft:"50px"}}>Hospitals Nearby</h1>
            </div>
            <div className="projectCard">
                <HospitalsCard />
            </div>
        </div>
    )
}

export default hospitalData;