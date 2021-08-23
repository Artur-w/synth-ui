import React from "react"
import { Col } from "react-bootstrap"
import "./Screen.css"

function Screen(){
    return (
        <Col xs={6} className="screen-container">
            <div id="screen" className="screen" />
        </Col>
    );
}

export default Screen;