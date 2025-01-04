import { useEffect, useState } from "react";
import "./PianoBody.css";
import * as Tone from 'tone';
import { Piano } from '@tonejs/piano';

function PianoBody({ theme }) {
    const [instrument, setInstrument] = useState(null);
    const [effects, setEffects] = useState({
        reverb: false,
        delay: false,
        compression: false,
    });

    // Effects 
    const reverb = new Tone.Reverb({ decay: 2, wet: 0.5 }).toDestination();
    const delay = new Tone.FeedbackDelay({ delayTime: "8n", feedback: 0.5, wet: 0.5 }).toDestination();
    const compressor = new Tone.Compressor(-30, 3).toDestination();

    useEffect(() => {
        let newInstrument;
        if (theme === "Default") {
            newInstrument = new Piano({ velocities: 5 }).toDestination();
        } else if (theme === "Christmas") {
            newInstrument = new Tone.Synth().toDestination();
        } else if (theme === "Halloween") {
            newInstrument = new Tone.MembraneSynth().toDestination();
        } else if (theme === "Techno") {
            newInstrument = new Tone.DuoSynth().toDestination();
        }

        if (newInstrument instanceof Piano) {
            newInstrument.load().then(() => {
                setInstrument(newInstrument);
            });
        } else {
            setInstrument(newInstrument);
        }
    }, [theme]);

    useEffect(() => {
        if (!instrument) return;

        // Remove all effects if page resets
        instrument.disconnect();

        // Apply toggled effects
        if (effects.reverb) instrument.connect(reverb);
        if (effects.delay) instrument.connect(delay);
        if (effects.compression) instrument.connect(compressor);

        instrument.connect(Tone.getDestination());
    }, [effects, instrument]);

    const playNote = (note) => {
        if (instrument) {
            if (instrument instanceof Piano) {
                instrument.keyDown({ note, velocity: 0.8 });
                setTimeout(() => instrument.keyUp({ note }), 300);
            } 
            else {
                instrument.triggerAttackRelease(note, "8n");
            }
        }
    };

    const toggleEffect = (effect) => {
        setEffects((prev) => ({
            ...prev,
            [effect]: !prev[effect],
        }));
    };

    const keyMap = {
        "1": "C3", "2": "C#3", "3": "D3", "4": "D#3", "5": "E3", "6": "F3", "7": "F#3", "8": "G3", "9": "G#3", "0": "A3", "-": "A#3", "=": "B3", 
        "a": "C4", "w": "C#4", "s": "D4", "e": "D#4", "d": "E4", "f": "F4", "t": "F#4", "g": "G4", "y": "G#4", "h": "A4", "u": "A#4", "j": "B4", 
        "k": "C5", "o": "C#5", "l": "D5", "p": "D#5", ";": "E5"
    };

    const keyNote = (event) => {
        const note = keyMap[event.key];
        if (note) {
            playNote(note);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", keyNote);
        return () => {
            window.removeEventListener("keydown", keyNote);
        };
    }, [instrument]);

    return (
        <div className="PianoBody">
            <div className="controls">
                <button onClick={() => toggleEffect("reverb")}>
                    {effects.reverb ? "Disable Reverb" : "Enable Reverb"}
                </button>
                <button onClick={() => toggleEffect("delay")}>
                    {effects.delay ? "Disable Delay" : "Enable Delay"}
                </button>
                <button onClick={() => toggleEffect("compression")}>
                    {effects.compression ? "Disable Compression" : "Enable Compression"}
                </button>
            </div>
            <ul className="piano-keys">
                <li className="key white" onClick={() => playNote('C3')}><span>1</span></li>
                <li className="key black" onClick={() => playNote('C#3')}><span>2</span></li>
                <li className="key white" onClick={() => playNote('D3')}><span>3</span></li>
                <li className="key black" onClick={() => playNote('D#3')}><span>4</span></li>
                <li className="key white" onClick={() => playNote('E3')}><span>5</span></li>
                <li className="key white" onClick={() => playNote('F3')}><span>6</span></li>
                <li className="key black" onClick={() => playNote('F#3')}><span>7</span></li>
                <li className="key white" onClick={() => playNote('G3')}><span>8</span></li>
                <li className="key black" onClick={() => playNote('G#3')}><span>9</span></li>
                <li className="key white" onClick={() => playNote('A3')}><span>0</span></li>
                <li className="key black" onClick={() => playNote('A#3')}><span>-</span></li>
                <li className="key white" onClick={() => playNote('B3')}><span>=</span></li>
                <li className="key white" onClick={() => playNote('C4')}><span>a</span></li>
                <li className="key black" onClick={() => playNote('C#4')}><span>w</span></li>
                <li className="key white" onClick={() => playNote('D4')}><span>s</span></li>
                <li className="key black" onClick={() => playNote('D#4')}><span>e</span></li>
                <li className="key white" onClick={() => playNote('E4')}><span>d</span></li>
                <li className="key white" onClick={() => playNote('F4')}><span>f</span></li>
                <li className="key black" onClick={() => playNote('F#4')}><span>t</span></li>
                <li className="key white" onClick={() => playNote('G4')}><span>g</span></li>
                <li className="key black" onClick={() => playNote('G#4')}><span>y</span></li>
                <li className="key white" onClick={() => playNote('A4')}><span>h</span></li>
                <li className="key black" onClick={() => playNote('A#4')}><span>u</span></li>
                <li className="key white" onClick={() => playNote('B4')}><span>j</span></li>
                <li className="key white" onClick={() => playNote('C5')}><span>k</span></li>
                <li className="key black" onClick={() => playNote('C#5')}><span>o</span></li>
                <li className="key white" onClick={() => playNote('D5')}><span>l</span></li>
                <li className="key black" onClick={() => playNote('D#5')}><span>p</span></li>
                <li className="key white" onClick={() => playNote('E5')}><span>;</span></li>
            </ul>
        </div>
    );
}

export default PianoBody;
