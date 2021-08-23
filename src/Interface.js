import React from "react";
import Control from "./Control/Control";
import Keyboard from "./Keyboard/Keyboard";
import { Container } from "react-bootstrap"

function Interface() {
    // Encapsulates the Control and Keyboard components into an Interface
    return (
        <body>
            <Container>
                <Control />
                <Keyboard />
            </Container>
        </body>
    );
}

export default Interface;