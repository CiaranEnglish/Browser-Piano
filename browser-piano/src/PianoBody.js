import { useEffect } from "react";
import "./PianoBody.css"
import * as Tone from 'tone';

function PianoBody() {
    const playNote = (note) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, "8n");
    };

    const keyMap = {
        "a":"C4", "w":"C#4", "s":"D4", "e":"D#4", "d":"E4", "f":"F4", "t":"F#4", "g":"G4", "y":"G#4", "h":"A4", "u":"A#4", "j":"B4", "k":"C5", "o":"C#5", "l":"D5", "p":"D#5", ";":"E5"
    };

    const keyNote = (event) => {
        const note = keyMap[event.key];
        if (note){
            playNote(note);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyNote);
        return () => {
            window.removeEventListener("keydown", keyNote);
        };
    },[]);

    return (
      <div className="PianoBody">  

            <ul class = "piano-keys">


                <li class = "key white" onClick={() => playNote('C2')}><span>a</span></li>
                <li class = "key black" onClick={() => playNote('C#2')}><span>w</span></li>
                <li class = "key white" onClick={() => playNote('D2')}><span>s</span></li>
                <li class = "key black" onClick={() => playNote('D#2')}><span>e</span></li>
                <li class = "key white" onClick={() => playNote('E2')}><span>d</span></li>
                <li class = "key white" onClick={() => playNote('F2')}><span>f</span></li>
                <li class = "key black" onClick={() => playNote('F#2')}><span>t</span></li>
                <li class = "key white" onClick={() => playNote('G2')}><span>g</span></li>
                <li class = "key black" onClick={() => playNote('G#2')}><span>y</span></li>
                <li class = "key white" onClick={() => playNote('A2')}><span>h</span></li>
                <li class = "key black" onClick={() => playNote('A#2')}><span>u</span></li>
                <li class = "key white" onClick={() => playNote('B2')}><span>j</span></li>
                <li class = "key white" onClick={() => playNote('C3')}><span>k</span></li>
                <li class = "key black" onClick={() => playNote('C#3')}><span>o</span></li>
                <li class = "key white" onClick={() => playNote('D3')}><span>l</span></li>
                <li class = "key black" onClick={() => playNote('D#3')}><span>p</span></li>
                <li class = "key white" onClick={() => playNote('E3')}><span>;</span></li>
                <li class = "key white" onClick={() => playNote('F3')}><span>a</span></li>
                <li class = "key black" onClick={() => playNote('F#3')}><span>w</span></li>
                <li class = "key white" onClick={() => playNote('G3')}><span>g</span></li>
                <li class = "key black" onClick={() => playNote('G#3')}><span>y</span></li>
                <li class = "key white" onClick={() => playNote('A3')}><span>h</span></li>
                <li class = "key black" onClick={() => playNote('A#3')}><span>u</span></li>
                <li class = "key white" onClick={() => playNote('B3')}><span>j</span></li>
                <li class = "key white" onClick={() => playNote('C4')}><span>a</span></li>
                <li class = "key black" onClick={() => playNote('C#4')}><span>w</span></li>
                <li class = "key white" onClick={() => playNote('D4')}><span>s</span></li>
                <li class = "key black" onClick={() => playNote('D#4')}><span>e</span></li>
                <li class = "key white" onClick={() => playNote('E4')}><span>d</span></li>
                <li class = "key white" onClick={() => playNote('F4')}><span>f</span></li>
                <li class = "key black" onClick={() => playNote('F#4')}><span>t</span></li>
                <li class = "key white" onClick={() => playNote('G4')}><span>g</span></li>
                <li class = "key black" onClick={() => playNote('G#4')}><span>y</span></li>
                <li class = "key white" onClick={() => playNote('A4')}><span>h</span></li>
                <li class = "key black" onClick={() => playNote('A#4')}><span>u</span></li>
                <li class = "key white" onClick={() => playNote('B4')}><span>j</span></li>
                <li class = "key white" onClick={() => playNote('C5')}><span>k</span></li>
                <li class = "key black" onClick={() => playNote('C#5')}><span>o</span></li>
                <li class = "key white" onClick={() => playNote('D5')}><span>l</span></li>
                <li class = "key black" onClick={() => playNote('D#5')}><span>p</span></li>
                <li class = "key white" onClick={() => playNote('E5')}><span>;</span></li>

            </ul>


            

            

            
      
        
         
  
        </div>
    );
  }
  
  export default PianoBody;