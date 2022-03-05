
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
  <>
     {/* <Navbar/> */} 
    <Navbar title="TextUtils" AboutText='About us' />

    <div className="container my-3">
      <Textform heading= "Enter your text below" />
      {/* <About/> */}
    </div>
    
  </>

  );
}

export default App;
