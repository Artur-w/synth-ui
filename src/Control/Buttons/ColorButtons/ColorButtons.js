import React from "react"
import "./ColorButtons.css"
import { Row, Button, Col } from "react-bootstrap"

function ColorButtons(){
    return (
        <Row className="colorbutton-container">
            <Col>
                <div className="brand">
                    <h1><b>SYNTH</b>UI</h1>
                </div>
            </Col>
            <Col xs={9}>
                <Row>
                    <Col>
                        {/* <label>Kick</label> */}
                        <Button id='pad0_btn' style={{background:"#5bc0de", borderColor: "#000"}} size="lg" className="color-button" />
                        {/* <label>PAD0</label> */}
                        <select id="pad0selectNote">
                            <option value="A2">A2</option>
                            <option value="B2">B2</option>
                            <option value="C2" selected="selected">C2</option>
                            <option value="D2">D2</option>
                        </select>
                        <select id="pad0selectDur">
                            <option value="2n">2n</option>
                            <option value="4n">4n</option>
                            <option value="8n" selected="selected">8n</option>
                            <option value="16n">n</option>
                        </select>
                    </Col>
                    <Col>
                        <Button id='pad1_btn' style={{background:"#428bca", borderColor: "#000"}} size="lg" className="color-button" />
                        {/* <label>PAD1</label> */}
                        <select id="pad1selectNote">
                            <option value="A1">A1</option>
                            <option value="B1" selected="selected">B1</option>
                            <option value="C1">C1</option>
                            <option value="D1">D1</option>
                        </select>
                        <select id="pad1selectDur">
                            <option value="2n">2n</option>
                            <option value="4n">4n</option>
                            <option value="8n">8n</option>
                            <option value="16n" selected="selected">16n</option>
                        </select>
                    </Col>
                    <Col>
                        <Button id='pad2_btn' style={{background:"#1565c0", borderColor: "#000"}} size="lg" className="color-button" />
                        {/* <label>PAD2</label> */}
                        <select id="pad2selectNote">
                            <option value="A1">A1</option>
                            <option value="B1">B1</option>
                            <option value="C1">C1</option>
                            <option value="D1" selected="selected">D1</option>
                        </select>
                        <select id="pad2selectDur">
                            <option value="8n" selected="selected">8n</option>
                            <option value="16n">16n</option>
                            <option value="32n">32n</option>
                            <option value="64n">64n</option>
                        </select>
                    </Col>
                    <Col>
                        <Button id='pad3_btn' style={{background:"#f06e9c", borderColor: "#000"}} size="lg" className="color-button" />
                        {/* <label>PAD3</label> */}
                        <select id="pad3selectNote">
                            <option value="A4">A4</option>
                            <option value="B4" selected="selected">B4</option>
                            <option value="C4" >C4</option>
                            <option value="D4">D4</option>
                        </select>
                        <select id="pad3selectDur">
                            <option value="8n" >8n</option>
                            <option value="16n" >16n</option>
                            <option value="32n" selected="selected">32n</option>
                            <option value="64n"  >64n</option>
                        </select>
                    </Col>
                    <Col>
                        <Button id='pad4_btn' style={{background:"#98475e", borderColor: "#000"}} size="lg" className="color-button" />
                        {/* <label>PAD4</label> */}
                        <select id="pad4selectNote">
                            <option value="C2">A1</option>
                            <option value="C4">B1</option>
                            <option value="C6">C1</option>
                            <option value="C8">D1</option>
                        </select>
                        <select id="pad4selectDur">
                            <option value="0.01">0.01</option>
                            <option value="0.1" selected="selected">0.1</option>
                            <option value="0.2">0.2</option>
                            <option value="0.4">0.4</option>
                        </select>
                    </Col>
                    <Col>
                        <Button id='pad5_btn' style={{background:"#9c1f4d", borderColor: "#000"}} size="lg" className="color-button" />
                        {/* <label>PAD5</label> */}
                        <select id="pad5selectNote">
                            <option value="A2">A2</option>
                            <option value="B2">B2</option>
                            <option value="C2">C2</option>
                            <option value="D2">D2</option>
                        </select>
                        <select id="pad5selectDur">
                            <option value="2n">2n</option>
                            <option value="4n">4n</option>
                            <option value="8n">8n</option>
                            <option value="16n">16n</option>
                        </select>
                        <select id="pad5selectTempo">
                            <option value="4n">25</option>
                            <option value="8n">50</option>
                            <option value="16n">75</option>
                            <option value="32n">100</option>
                        </select>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default ColorButtons;

