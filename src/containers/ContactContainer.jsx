import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactContainer.css";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import CardContainer from "./CardContainer";
import myPhoto from "../img/me2.png"

class ContactContainer extends React.Component{
    render(){
        return(
            <Jumbotron variant="dark" className="m-5 p-0">
                <Container className="ContactContainer-Container">
                <Row>
                    <Col sm={4} className="d-flex align-items-center justify-content-center col-container-wa">
                        <div className="p-3">
                            <h1 className="responsive-centered responsive-title pb-3 Contact-Title">WhatsApp</h1>
                            <a href="https://wa.me/6281231269604" className="responsive-centered d-flex justify-content-center">
                                <Button variant="warning">Hubungi</Button>   
                            </a>
                        </div>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center justify-content-center col-container-ig">
                        <div className="p-3">
                            <h1 className="responsive-centered responsive-title pb-3 Contact-Title">Instagram </h1>
                            <a href="/" className="responsive-centered d-flex justify-content-center">
                                    <Button variant="warning">Hubungi</Button>   
                                </a>
                        </div>
                    </Col>
                    <Col sm={4} className="d-flex align-items-center justify-content-center col-container-twt">
                        <div className="p-3">
                            <h1 className="responsive-centered responsive-title pb-3 Contact-Title">Twitter </h1>
                            <a href="/" className="responsive-centered d-flex justify-content-center">
                                <Button variant="warning">Hubungi</Button>   
                            </a>
                        </div>
                    </Col>

                </Row>
                </Container>    
            </Jumbotron>
        )
    }
}

export default ContactContainer;