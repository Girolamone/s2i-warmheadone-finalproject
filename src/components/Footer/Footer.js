import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css"

function Footer(){
return(
    <footer>
        <Container fluid>
            <h2 className="footer-text">
            © 2024 WarmHeadOne. All rights reserved.
            </h2>
        </Container>
    </footer>
)
}

export default Footer;