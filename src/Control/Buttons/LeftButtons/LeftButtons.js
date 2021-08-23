import React from "react"
import { Col, Row, Button } from "react-bootstrap"

function LeftButtons(){
    return (
        <Col xs={1} className="button-container">
            <Row>
                <Col>
                    <Row>
                        <Button id='play' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Play</label>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>

                        <Button id='btn_start' style={{background:"#000"}} size="lg" className="button" />
                        <label>REC</label>
                        <Button id='btn_synthrec' style={{background:"#000"}} size="lg" className="button" />
                        <label>S-REC</label>
                        {/* <audio id='audio' controls/> */}
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default LeftButtons;