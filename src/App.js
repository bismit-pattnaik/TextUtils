import React, { useState } from 'react'
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 // Link
} from "react-router-dom";



function App() {

 //for dark mode
 const [mode, setmode] = useState('light')

 const toggleMode = ()=>{
   if(mode==='light')
   {
    setmode('dark');
    document.body.style.backgroundColor= '#1d1d46';
    showAlert("Dark mode enabled","success")
   }
   else
   {
    setmode('light');
    document.body.style.backgroundColor= 'white';
    showAlert("Light mode enabled","success")
   }  
 }

 //for alert msg
const [alert, setalert] = useState(null)

const showAlert= (message,type)=>{
   setalert({
     msg : message,
     type : type
   })
   setTimeout(() => {
     setalert(null)
   }, 1500);
  
}


  return (
  <>
   <Router>
      <Navbar title='TextUtilss' mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert} />

     <div className="container my-3"> 
     <Routes>
          <Route exact path="/" 
             element={<Textform showAlert={showAlert} heading= "Enter your text below" mode={mode} />} />
          <Route exact path="/about" 
             element={ <About />} />
      </Routes>  
     </div>
    </Router>
  </>

  );
}

export default App;
