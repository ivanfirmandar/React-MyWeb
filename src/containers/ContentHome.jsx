import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContentHome.css";
import CardContainer from "./CardContainer";
import myPhoto from "../img/me2.png"

class ContentHome extends React.Component{
    render(){
        return(
            <Container className="ContentHome-Container p-5">
                <Row>
                    <Col sm={4} className="d-flex align-items-start justify-content-center mb-3">
                        <img className="myPhoto" src={myPhoto} alt="" />
                    </Col>
                    <Col sm={8} >
                        <Row className="d-flex align-items-center">
                        <div className="">
                            <p className="ContentHome-Title responsive-centered">Welcome</p>
                            <p className="m-0 ContentHome-yellow responsive-centered">Developer Abal-abal</p>
                            <h2 className="ContentHome-myName responsive-centered">Ivan Firmanda <Badge variant="warning">1999</Badge></h2>
                            <p className="ContentHome-Paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis nobis sequi debitis eveniet, non modi labore, provident tenetur voluptatum, id dicta ea commodi magnam vitae aliquam assumenda excepturi earum tempore quidem officiis officia sapiente magni facere cum! Ad pariatur a velit cumque. Commodi odio ut labore minima doloribus voluptates unde illum distinctio, harum sint voluptatem consequatur illo nesciunt consectetur accusantium, enim praesentium laboriosam quod provident, culpa qui. Enim dolorem optio, distinctio cumque alias deserunt corrupti magnam. Non voluptatem minima rem, possimus quis dolores sapiente eius cupiditate earum omnis veritatis doloremque vitae. Eos, tempora blanditiis at molestiae quibusdam inventore reprehenderit earum!</p>
                        </div>
                        </Row>
                        <Row>
                            <div>
                                <p className="ContentHome-yellow">portofolio</p>
                                <CardContainer/>
                            </div>
                        </Row>
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContentHome;