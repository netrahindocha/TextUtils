import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  // const [modeTxt, setModeTxt] = useState('dark');

  // const removeBodyClasses = () => {
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-dark')
  // }

  const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls);
    // document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark')
      // setModeTxt('light')
      document.body.style.backgroundColor = '#41464b'
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light')
      // setModeTxt('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"
    }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <BrowserRouter>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route path='/' element={<TextForm heading="Try Textutils - Word Counter, Character Counter, Remove Extra Spaces " mode={mode} alert={alert} showAlert={showAlert} />} />
        <Route path='/About' element={<About mode={mode}/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
