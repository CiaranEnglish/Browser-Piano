import { useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import Home from "./pages/home";
import "./PianoBody"
import PianoBody from './PianoBody';
import ChangeThemes from './changethemes';
import SignUpForm from './SignUpForm';
import Login from './Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [theme, setTheme] = useState("Default");
  return (
    <div className="App">
      <div className = "navigation-bar">
               <img src = {logo} alt = "piano-logo" className = "piano-logo" /> 
               <a href="/login" className="login-button">Login Here</a>
          </div>        
       
          <PianoBody theme={theme}/>
          <ChangeThemes currentTheme={theme} themeChange={setTheme}/>
          
          <BrowserRouter>
            <Routes>
              <Route path='/signup' element={<SignUpForm />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
      </div>  
  );
}

export default App;
