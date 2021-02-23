import React from "react";
import { Card } from "react-bootstrap";

class MessageBox extends React.Component{
    render(){
        return(
            <Card className="mt-1 mb-1">
                <Card.Body>
                    <Card.Title>Anonymous</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"12px"}}>{this.props.date}</Card.Subtitle>
                    <Card.Text>
                    {this.props.msg}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default MessageBox;