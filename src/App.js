import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
// import HospitalData from './components/hospitalData'; 
import Header from './components/Header';
// import {BrowserRouter as Router , Route , Routes} from "react-router-dom"
import { PreAuthForm } from './PreAuthForm';
import HomepageCards from './components/HomepageCards';
import { Home } from './Home';
import HospitalNearMe from './HospitalsNearMe';
import { DoctorsCard } from './Doctors';
// import HospitalData from './components/hospitalData';
const  App=  ()=> {
  return (
    <div style={{backgroundColor:"#131313"}}>
      <Router>
      {/* <Header /> */}

        
  
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/hospitals" Component={HospitalNearMe} />
          <Route path="/doctors" Component={DoctorsCard} />
          <Route path="/preauth" Component={PreAuthForm} />
          {/* Add more routes for other components if needed */}
        </Routes>
      </Router>
      
      </div>
    );
}

export default App;
