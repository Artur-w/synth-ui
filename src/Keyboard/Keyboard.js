import './Keyboard.css';
import React from "react";
import './Keyboard_sounds'
import { Row, Container } from "react-bootstrap"

function Keyboard() {
  return (
    // Keyboard container which encapsulates all of the different keyboard keys
    <Row>
      <Container className="key-container">
        <div id="C3" className="white-key">
            <div id="C#3" className="black-key" />
        </div>
        <div id="D3" className="white-key">
            <div id="D#3" className="black-key" />
        </div>
        <div id="E3" className="white-key" />
        <div id="F3" className="white-key">
            <div id="F#3" className="black-key" />
        </div>
        <div id="G3" className="white-key">
            <div id="G#3" className="black-key" />
        </div>
        <div id="A3" className="white-key">
            <div id="A#3" className="black-key" />
        </div>
        <div id="B3" className="white-key" />
        <div id="C4" className="white-key">
            <div id="C#4" className="black-key" />
        </div>
        <div id="D4" className="white-key">
            <div id="D#4" className="black-key" />
        </div>
        <div id="E4" className="white-key" />
        <div id="F4" className="white-key">
            <div id="F#4" className="black-key" />
        </div>
        <div id="G4" className="white-key">
            <div id="G#4" className="black-key" />
        </div>
        <div id="A4" className="white-key">
            <div id="A#4" className="black-key" />
        </div>
        <div id="B4" className="white-key" />
        <div id="C5" className="white-key" />
      </Container>
    </Row>
  );
}

export default Keyboard;