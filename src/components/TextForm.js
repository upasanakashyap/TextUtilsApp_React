import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpClick=()=>{
        //console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
   }

   const handleLoClick=()=>{
    //console.log("UpperCase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase","success")
  }

  const handleClearClick=()=>{
    //console.log("UpperCase was clicked" + text);
    let newText=" ";
    setText(newText)
    props.showAlert("Text cleared ","success")
   }

   const handleOnChange=(event)=>{
    //console.log("On Changed");
    setText(event.target.value);
    
 }

    const[text,setText] =useState(" ");

  return (
    <>
    <div className='container'  style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
     <div className ="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',
         color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
         
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Cleartext</button>
      </div>
       <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
              <h2> Your text Summary</h2>
             <p>{text.split(" ").length}words and{text.length} character</p>
             <p>{0.08 *text.split(" ").length}Minutes read</p>
             <h3>Preview</h3>
             <p>{text.lenght>0?text:"Enter Something in textbox above to preview it here"}</p>
       </div>
      </>
  )
}
