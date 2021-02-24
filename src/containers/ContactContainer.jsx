import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactContainer.css";
import MessageBoxContainer from "./MessageBoxContainer"
import { Jumbotron, Button, Container, Row, Col, Form } from "react-bootstrap";
import loading from "../img/loading.gif"

class ContactContainer extends React.Component{
    constructor(props){
        super(props);
        this.publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1U-BuZ5-pMbJa3NIYlu8vp7my6dXhidDO4bxHaWejEyM/edit?usp=sharing';
        this.state = {
            data : []
        }
        this.init();
        window.addEventListener('DOMContentLoaded', this.init)
    }
    init = ()=>{
        Tabletop.init( { key: this.publicSpreadsheetUrl,
            callback: this.showInfo,
            simpleSheet: true } )
    }
    showInfo = (data, tabletop)=>{
        this.setState({data: data});
    }
    sendMessage = async ()=>{
        const DateN = new Date();
        const date = DateN.getHours() + ":"+ DateN.getMinutes()+ " | " + DateN.getDate() + "-" + DateN.getMonth() + "-" + DateN.getFullYear() ;
        document.getElementById('loading').classList.remove("hiden")
        const msg = document.getElementById("pesan-visitor");
        const access = document.getElementById("sifat-pesan")
        const url = `https://sheetdb.io/api/v1/tgv6rbgi12m6k`
        var json = {
            data : [
            {
                id : Date.now(),
                message : msg.value,
                access : access.value,
                date : date
            }
        ]}
        try{
            await fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(json)
            })
        }catch{
            alert("gagal")
        }finally{
            document.getElementById('loading').classList.add("hiden")
            alert("Berhasil")
            window.location.href = "secreto"
        }
        
    }
    render(){
        return(
            <Jumbotron variant="dark" className="m-3 pt-0 pb-3">
                <Container className="ContactContainer-Container">
                <Row>
                    <Col sm={6} className="">
                        <div className="pt-3 pb-3">
                            <Form.Group controlId="name-visitor">
                                <Form.Label>Nama Pengirim</Form.Label>
                                <Form.Control size="lg" type="text" placeholder="Fulan bin Fulan" value="Anonymous" readOnly />
                            </Form.Group>
                            <Form.Group controlId="sifat-pesan">
                                <Form.Label>Hak Akses Pesan</Form.Label>
                                <Form.Control as="select">
                                <option value="public">Publik - Dapat dilihat orang lain</option>
                                <option value="private">Privat - Tidak dapat dilihat orang lain</option>
                                {/* <option>Protected</option> */}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="pesan-visitor">
                                <Form.Label>Pesan</Form.Label>
                                <Form.Control size="lg" as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="warning" onClick={this.sendMessage}>Kirim</Button>
                        </div>
                    </Col>
                    <Col sm={6} className="">
                        <MessageBoxContainer data={this.state.data}/>
                    </Col>
                </Row>
                </Container>  
                <p style={{textAlign:"center", color:"gray", marginTop:"10px", marginBottom:"5px", fontSize:"12px"}}>Created by Ivan Firmanda</p>  
            </Jumbotron>
        )
    }
}

export default ContactContainer;
