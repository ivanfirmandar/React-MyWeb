import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContentAbout.css";
import CardContainer from "./CardContainer";
import myPhoto from "../img/me2.png"

class ContentAbout extends React.Component{
    render(){
        return(
            <Container className="ContentAbout-Container p-4">
                <Row>
                    <Col sm={4} className="d-flex align-items-start justify-content-center mb-3">
                        <img className="myPhoto" src={myPhoto} alt="" />
                    </Col>
                    <Col sm={4} >
                        <h1 className="ContentAbout-Title">Biodata</h1>
                        <Row className="d-flex align-items-center justify-content-center">
                        <div className="p-4">
                            <p className="m-0 ContentAbout-yellow responsive-centered">Nama Lengkap</p>
                            <h2 className="ContentAbout-myName responsive-centered">Ivan Firmanda Romadhoni</h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Tempat, Tanggal Lahir</p>
                            <h2 className="ContentAbout-myName responsive-centered">Kabupaten Jember, 1 Januari 1999</h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Jenis Kelamin</p>
                            <h2 className="ContentAbout-myName responsive-centered">Laki-laki</h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Agama</p>
                            <h2 className="ContentAbout-myName responsive-centered">Islam</h2>
                            <p className="m-0 ContentAbout-yellow 
                            responsive-centered">Domisili</p>
                            <h2 className="ContentAbout-myName responsive-centered">Kabupaten Nganjuk</h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Status</p>
                            <h2 className="ContentAbout-myName responsive-centered">Belum...</h2>     
                            <p className="m-0 ContentAbout-yellow responsive-centered">Cita-cita</p>
                            <h2 className="ContentAbout-myName responsive-centered">Insinyur</h2> 
                        </div>
                        </Row>
                    </Col>
                    <Col sm={4} >
                        <Row className="d-flex align-items-center">
                        <div className="p-4">
                            <p className="m-0 ContentAbout-yellow 
                            responsive-centered">Hobi</p>
                            <h2 className="ContentAbout-myName responsive-centered">
                                <Badge variant="warning" className="mr-1">Menjelajahi Internet</Badge>
                                <Badge variant="warning" className="mr-1">Ngode</Badge> 
                                <Badge variant="warning" className="mr-1">Over-thinking</Badge>
                                <Badge variant="warning" className="mr-2">nonton video kucing viral</Badge> 
                            </h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Pekerjaan Utama</p>
                            <h2 className="ContentAbout-myName responsive-centered">Supir Motor</h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Pekerjaan Sampingan</p>
                            <h2 className="ContentAbout-myName responsive-centered">Admin Twitter dan Instagram Pribadi</h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Bakat</p>
                            <h2 className="ContentAbout-myName responsive-centered">
                                <Badge variant="warning" className="mr-1">Menjelajahi Internet</Badge>
                                <Badge variant="warning" className="mr-1">Menatap laptop atau HP lama</Badge> 
                            </h2>
                            <p className="m-0 ContentAbout-yellow responsive-centered">Riwayat Penyakit</p>
                            <h2 className="ContentAbout-myName responsive-centered">Kecanduan social media</h2>   
                            <p className="m-0 ContentAbout-yellow responsive-centered">Motto</p>
                            <h2 className="ContentAbout-myName responsive-centered">You can't go back and change the beginning, but you can start where you are and change the ending.</h2>       
                        </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ContentAbout;