import React, {useState} from 'react'

export default function Textform(props) {
   
    const [text , setText] = useState("write here");

    const handleupClick = ()=> {
    //   console.log("got clicked" + text);
      var newtext =text.toUpperCase();
      setText(newtext);
    }
    
    const handleloClick = ()=> {
          var newtext =text.toLowerCase();
          setText(newtext);
        }
     const handlereverseClick = ()=> {
            var newtext =text.split(" ").reverse().join(" ");
            setText(newtext);
          }
     const handleclearClick = ()=> {
            var newtext ="";
            setText(newtext);
          }

    const handleonChange = (event)=> {
    //    console.log("on change");
       setText(event.target.value);
    }

    return (
        <>
         <div className="container">
             <h1>{props.heading}</h1> 
             <div className="mb-3">  
             <textarea className="form-control" value={text} onChange={handleonChange} id="mybox" rows="8" ></textarea>
             </div>
             <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert To Uppercase</button>
             <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert To Lowercase</button>
             <button className="btn btn-primary mx-2" onClick={handlereverseClick}>Reverse String</button>
             <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
         </div>

         <div className="container my-3">
            <p> {text.split(" ").length} words and {text.length} Characters Present</p>
            <p> {0.08 * text.split(" ").length} minutes to read the textArea</p>
             <h2>Preview</h2>
             {text}
         </div>
        </>
    )
}
