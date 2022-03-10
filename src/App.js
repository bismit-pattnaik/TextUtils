
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'

function App() {

 const [mode, setmode] = useState('light')

 const toggleMode = ()=>{
   if(mode==='light')
   {
    setmode('dark');
    document.body.style.backgroundColor= '#1d1d46';
   }
   else
   {
    setmode('light');
    document.body.style.backgroundColor= 'white';
   }
    
 }

  return (
  <>
     {/* <Navbar/> 
    <Navbar title="TextUtils" AboutText='About us' /> */}

    <Navbar title='TextUtilss' mode={mode} toggleMode={toggleMode}/>

     <div className="container my-3">
       <Textform heading= "Enter your text below" mode={mode} />
      {/* <About/> */}
     </div>
    
  </>

  );
}

export default App;
