import React, { useState } from 'react'
import './App.css';
import Alert from './Components/Alert';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';


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
      <Navbar title='TextUtilss' mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert} />

     <div className="container my-3">
       <Textform showAlert={showAlert} heading= "Enter your text below" mode={mode} />
       {/* <About/> */}
     </div>
    
  </>

  );
}

export default App;
