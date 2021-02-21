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
          <Card.Title>
            <b>{this.props.title || "Judul"}</b>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {this.props.subtitle || "Subtitle"}
          </Card.Subtitle>
          <Card.Text>{this.stringParser() || "Text"}</Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button variant="warning">Selengkapnya</Button>
        </Card.Footer>
      </Card>
    );
  }
}
export default CardA;
