import React, {useState} from 'react'



export default function TextForm(props) {
   const handleUpClick=()=>{
        //console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
   }

   const handleLoClick=()=>{
    //console.log("UpperCase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
  }

  const handleClearClick=()=>{
    //console.log("UpperCase was clicked" + text);
    let newText=" ";
    setText(newText)
   }

   const handleOnChange=(event)=>{
    //console.log("On Changed");
    setText(event.target.value);
 }

    const[text,setText] =useState(" ");

  return (
    <div>
      <h1>{props.heading}</h1>
     <div className ="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Cleartext</button>
       <div className="container my-3">
              <h2> Your text Summary</h2>
             <p>{text.split(" ").length}words and{text.length} character</p>
             <p>{0.08 *text.split(" ").length}Minutes read</p>
             <h3>Preview</h3>
             <p>{text}</p>
       </div>
  </div>
  )
}
