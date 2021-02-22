import React from "react";
import "./Development.css"
import "bootstrap/dist/css/bootstrap.min.css";

import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";

class Development extends React.Component{
    render(){
        return(
            <Jumbotron variant="dark" className="m-5">
                <Container className="Development-Container p-5">
                <Row>
                    <Col sm={4} className="d-flex align-items-center justify-content-center">
                        <h1 className="oops">OOPS!</h1>
                    </Col>
                    <Col sm={8}>
                    <h1>Halo Pengunjung!</h1>
                    <p>
                        Maaf atas ketidaknyamanan ini, halaman website ini masih dalam proses pengembangan developer. Anda dapat mengunjungi website ini apabila proses pengembangan telah selesai.
                    </p>
                    <p>
                        <Button variant="warning">Kembali ke Beranda</Button>
                    </p>
                    </Col>
                </Row>
                </Container>
                
            </Jumbotron>
        )
    }
}

export default Development;