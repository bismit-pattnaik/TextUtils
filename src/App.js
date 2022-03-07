
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, { useState } from 'react'

function App() {

 const [mode, setmode] = useState('dark')

 const toggleMode = ()=>{
   if(mode==='dark')
   setmode('light');

   else
    setmode('dark');
 }

  return (
  <>
     {/* <Navbar/> 
    <Navbar title="TextUtils" AboutText='About us' /> */}

    <Navbar title='TextUtilss' mode={mode} toggleMode={toggleMode}/>


      <div className="container my-3">
       <Textform heading= "Enter your text below" />
            {/* <About/> */}
       </div>
    
  </>

  );
}

export default App;
