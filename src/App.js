import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert"
//import About from "./components/About";

function App() {
  let[mode, setMode] = useState('light');
  const[alert, setAlert]=useState(null);

   const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const  toggleMode=()=>{
    if(mode ==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode has been enabled","success")
      document.title ='TextUtils - Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      document.title ='TextUtils - Light Mode';
    }
    }
  
  return (
    <>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode}/>
      <div className="container my-3">
        <Alert alert={alert}/>
        <TextForm  showAlert ={showAlert} heading="Enter the text to analyze below"   mode={mode} />
      </div>
    </>
  );
}

export default App;


