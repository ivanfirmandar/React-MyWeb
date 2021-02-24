import React from "react";
import { Card, Badge } from "react-bootstrap";
import "./MessageBox.css";

class MessageBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentDidUpdate = (prevProps,prevState)=>{
        if(prevProps == this.props) return ;
        if (this.props.access == "private") {
            this.setState({
                accessColor : "danger"
            })
        }else{
            this.setState({
                accessColor : "warning"
            })
        }
    }
    changeColor = ()=>{
        if(this.props.access == "private"){
            return "redText"
        }
    }
    render(){
        return(
            <Card className="mt-1 mb-1">
                <Card.Body>
                    <div className="d-flex justify-content-between">
                        <Card.Title>Anonymous</Card.Title><Badge variant={this.state.accessColor} className="access-badge">{this.props.access}</Badge>
                    </div>
                    <Card.Subtitle className="mb-2 text-muted" style={{fontSize:"12px"}}>{this.props.date}</Card.Subtitle>
                    <Card.Text className={this.changeColor}>
                    {this.props.msg}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}
export default MessageBox;