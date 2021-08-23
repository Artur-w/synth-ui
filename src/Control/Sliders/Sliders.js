import React from "react"
import "./Sliders.css"
import '../../Keyboard/Keyboard_sounds'
import { Row, Col } from "react-bootstrap"

function Sliders(){
    return (
        <Col xs={2} className="slide-container">
            <Row>
                <Col xs={6}>
                    <Row>
                        <input id="volume-slider" type="range" orient="vertical" min="0" max="30" step="0.1" />
                    </Row>
                    <Row>
                        <label>Volume</label>
                    </Row>
                </Col>
                <Col xs={6}>
                    <Row>
                        <input id="metronome-slider" type="range" orient="vertical" min="50" max="200" step="0.5" />
                    </Row>
                    <Row>
                        <label>Tempo</label>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default Sliders;
