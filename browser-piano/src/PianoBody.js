import "./PianoBody.css"
import * as Tone from 'tone';

function PianoBody() {
    const playNote = (note) => {
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(note, "8n");
    };

    return (
      <div className="PianoBody">  

            <ul class = "piano-keys">


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