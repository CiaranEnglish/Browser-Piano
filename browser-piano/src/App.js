import { useState } from 'react';
import logo from './logo.jpg';
import './App.css';
import Home from "./pages/home";
import "./PianoBody"
import PianoBody from './PianoBody';
import ChangeThemes from './changethemes';

function App() {
  const [theme, setTheme] = useState("Default");
  return (
    <div className="App">
      <div className = "navigation-bar">
               <img src = {logo} alt = "piano-logo" className = "piano-logo" />  
          </div>        
       
          <PianoBody theme={theme}/>
          <ChangeThemes currentTheme={theme} themeChange={setTheme}/>
        <Home/>
      </div>  
  );
}

export default App;
