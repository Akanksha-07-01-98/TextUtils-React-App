import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import React, {useState} from 'react'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
    })
  //   setTimeout=(()=>{
  //     setAlert(null);},1500);   
   }
  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Lightmode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Darkmode has been enabled","success");
    }
  }
  return (
   <> 
<Router>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>   
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode}/>} />
        </Routes>
      </div>
   </Router>


   </>
  );
}

export default App;
