import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';
import Alert from './components/Alert';
function App() {

  const [mode, setMode] = useState('light');

  const [btn, setBtn] = useState('primary')

const toggleModeRed = ()=>{
    if(mode==='light'){
      setMode('danger');
      document.body.style.backgroundColor='red';
      document.body.style.color='white';
      showAlert("Red mode has been enabled", "success")
  
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled", "success")
    }
    if(btn==='primary'){
      setBtn('danger');
    }
    else{
      setBtn('primary');
    }
  }



  const[alert,setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='yellow'
      showAlert("dark mode has been enabled", "success");
      document.title = 'TextUtils - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='grey'
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils - LightMode';

    }
  }

  return (
    <>
    
    <Navbar title="TaJ Dealership" mode={mode} toggleMode={toggleMode} toggleModeRed={toggleModeRed} />
    <Alert alert={alert}/>
    <div className="container my-3">
  
          <Textform heading="Enter text to analyze"/>
          
    
    </div>
    


    
  

    </>
  );
}

export default App;
