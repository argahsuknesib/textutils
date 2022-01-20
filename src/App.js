import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import About from "./components/About"
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({
       msg : message,
       type : type
    })
    setTimeout(() =>{
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      handleAlert("dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      handleAlert("light mode enabled", "success");
    }
  }

  return (
    <div>

      {/* <NavBar title="TextUtils" aboutText="About" /> */}
      <NavBar title="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <div className="container my-3">
        <TextForm handleAlert = {handleAlert} heading = "Enter the text here" mode = {mode}/>
        {/* <About/> */}
      </div>
      </div>
      
  );
}

export default App;
