
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert = (type, msg) =>{
    setAlert({
      msg : msg,
      type: type
    })
     setTimeout(() => {
       setAlert(null);
     }, 1500);
  }


  const toggleMode = () =>{
    if(mode== "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light mode has been enabled");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#081d44";
      showAlert("success", "Dark mode has been enabled");
    }
  }


  return (
    <>
      <Router>
        <Navbar
          title="Textutils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        {/* <Alert alert={alert} /> */}

        <div className={`container text-${mode == "light" ? "dark" : "white"}`}>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyse" mode={mode} />
            </Route>
          </Switch>
        </div>
        {/* <About /> */}
      </Router>
    </>
  );
}
export default App;
