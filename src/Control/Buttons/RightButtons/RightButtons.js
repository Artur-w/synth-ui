import React from "react";
import './RightButtons.css';
import { Col, Button, Row } from "react-bootstrap"

function RightButtons() {
    return (
        <Col className="button-container">
            <Row>
                <Col>
                    <Row>
                        <Button id='effect0_btn' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Effect0</label>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Button id='effect1_btn' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Effect1</label>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Button id='effect2_btn' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Effect2</label>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Button id='effect3_btn' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Effect3</label>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Button id='effect4_btn' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Effect4</label>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Button id='effect5_btn' style={{background:"#000"}} size="lg" className="button" />
                    </Row>
                    <Row>
                        <label>Effect5</label>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
};


export default RightButtons;
