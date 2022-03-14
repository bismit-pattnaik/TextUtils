import React, {useState} from 'react'

export default function Textform(props) {
   
    const [text , setText] = useState("Enter text here");

    const handleupClick = ()=> {
    //   console.log("got clicked" + text);
      var newtext =text.toUpperCase();
      setText(newtext);
      props.showAlert("Converted to upper case","success")
    }
    
    const handleloClick = ()=> {
          var newtext =text.toLowerCase();
          setText(newtext);
          props.showAlert("Converted to Lower case","success")
        }
     const handlereverseClick = ()=> {
            var newtext =text.split(" ").reverse().join(" ");
            setText(newtext);
            props.showAlert("String is reversed","success")
          }
     const handleclearClick = ()=> {
            var newtext ="";
            setText(newtext);
            props.showAlert("message is cleared","success")
          }

      const handleonChange = (event)=> {
      //    console.log("on change");
        setText(event.target.value);
      }

     const handleCopy = ()=>{
       var text = document.getElementById("mybox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied to Clipboard","success")
     }
     
     const handleSpace = () =>{
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" "));
       props.showAlert("Cleared Extra spaces","success")
     }



    return (
        <>
         <div className="container" style={{color : props.mode==='light'?'black':'white'}}>
             <h1>{props.heading}</h1> 
             <div className="mb-3">  
             <textarea className="form-control" value={text} onChange={handleonChange} style={{color : props.mode==='light'?'black':'white', backgroundColor: props.mode==='dark'?'#1d1d46':'white'}} id="mybox" rows="8" ></textarea>
             </div>
             <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To Uppercase</button>
             <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lowercase</button>
             <button className="btn btn-primary mx-2" onClick={handlereverseClick}>Reverse String</button>
             <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
             <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
             <button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Spaces</button>

         </div>

         <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
            <p> {text.split(" ").length} words and {text.length} Characters Present</p>
            <p> {0.08 * text.split(" ").length} minutes to read the textArea</p>
             <h2>Preview</h2>
             {text.length>0?text :"Enter something in textbox to preview here ! "}
         </div>
        </>
    )
}
