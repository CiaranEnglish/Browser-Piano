import logo from './logo.jpg';
import './App.css';
import Home from "./pages/home";
import "./PianoBody"
import PianoBody from './PianoBody';

function App() {
  return (
    <div className="App">  
         <div className = "navigation-bar">
               <img src = {logo} alt = "piano-logo" className = "piano-logo" />  
          </div>               
        <PianoBody/>
        <Home/>
      </div>  
  );
}

export default App;
