import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class CardA extends React.Component {
  stringParser = ()=>{
    if(this.props.text){
      return this.props.text.substring(0,100) + "....";
    }else{
      return "No Description Available"
    }
  }
  render() {
    return (
      <Card style={{ width: "300px" }} className="m-1">
        <Card.Body>
          <Card.Title style={{fontSize:"18px"}}>
            <b>{this.props.title || "Judul"}</b>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"14px"}}>
            {this.props.subtitle || "Subtitle"}
          </Card.Subtitle>
          <Card.Text style={{fontSize:"12px", textAlign:"justify"}}>{this.stringParser() || "Text"}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <a href={this.props.link}>
            <Button variant="warning">Selengkapnya</Button>
          </a>
        </Card.Footer>
      </Card>
    );
  }
}
export default CardA;
