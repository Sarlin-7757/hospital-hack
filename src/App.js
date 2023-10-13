import logo from './logo.svg';
import './App.css';

import HospitalData from './components/hospitalData'; 
import Header from './components/Header';
const  App=  ()=> {
  return (
    <div className="App" style={{backgroundColor:"#131313"}}>
      <Header />
      <HospitalData />
    
    </div>
  );
}

export default App;
