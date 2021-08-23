import './Control.css';
import RightButtons from "./Buttons/RightButtons/RightButtons"
import LeftButtons from "./Buttons/LeftButtons/LeftButtons"
import Screen from "./Screen/Screen"
import Sliders from "./Sliders/Sliders"
import ColorButtons from "./Buttons/ColorButtons/ColorButtons"
import { Row, Col, Container} from "react-bootstrap"
import React from "react";

function Control() {
    return (
        // Control container which encapsulates all of the different buttons, sliders and screen
        <Container>
        <Row>
            <Col className="control-container">
                <LeftButtons />

                <Sliders />

                <Screen />

                <RightButtons />
            </Col>
        </Row>
        <Row>
            <ColorButtons />
        </Row>
        </Container>
    );
}

export default Control;
