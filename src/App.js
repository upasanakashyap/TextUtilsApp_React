import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




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
      //document.title ='TextUtils - Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success")
      //document.title ='TextUtils - Light Mode';
    }
    }
  
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      < Routes>
          <Route exact path="/about" element ={
             <About  mode={mode}/>}>
          </Route>
          <Route  exact path="/"  element ={
            <TextForm  showAlert ={showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces"   mode={mode} />
         }> 
         </Route>
         </Routes>
         </div> 
        </Router>
    </>   
  );
}

export default App;

 
      
          
      
   
