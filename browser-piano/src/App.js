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
  // Set theme to default on startup 
  const [theme, setTheme] = useState("Default");

  // Definition for page layout and UI
  return (
    <div className="App">
      {/* Load navigation bar with logo */}
      <div className = "navigation-bar">
               <img src = {logo} alt = "piano-logo" className = "piano-logo" /> 
               <a href="/login" className="login-button">Login Here</a>
          </div>        

          {/* Load piano with current theme (default) */}
          <PianoBody theme={theme}/>
          <ChangeThemes currentTheme={theme} themeChange={setTheme}/>
          
          {/* Routes for login and signup pages */}
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
