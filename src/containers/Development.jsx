import React from "react";
import "./Development.css"
import "bootstrap/dist/css/bootstrap.min.css";
import developmentImage from "../img/development.png"

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

class Development extends React.Component{
    render(){
        return(
            <Jumbotron variant="dark" className="m-5 p-0">
                <Container className="Development-Container pb-3">
                <Row>
                    <Col sm={4} className="d-flex align-items-center justify-content-center">
                        <img className="development-image p-3" src={developmentImage} alt=""/>
                    </Col>
                    <Col sm={8} className="d-flex align-items-center justify-content-center">
                        <div className="p-3">
                            <h1 className="responsive-centered responsive-title pb-3">Halo Pengunjung! </h1>
                            <p className="developer-paragraph responsive-centered responsive-paragraph">
                                Maaf ya atas ketidaknyamanannya, halaman website ini masih dalam proses pengembangan developer. Kalian dapat mengunjungi website ini apabila proses pengembangan telah selesai.
                            </p>
                            <p className="developer-badge responsive-centered responsive-paragraph pb-3">- Developer</p>
                            <a href="/" className="responsive-centered d-flex">
                                <Button variant="warning">Kembali ke Beranda</Button>   
                            </a>
                        </div>
                    </Col>
                </Row>
                </Container>
                
            </Jumbotron>
        )
    }
}

export default Development;