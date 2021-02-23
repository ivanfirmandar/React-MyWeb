import React from "react";
import MessageBox from "../items/MessageBox";
import "./MessageBoxContainer.css"

class MessageBoxContainer extends React.Component{
    constructor(props){
        super(props)
        
        document.getElementById('loading').classList.remove("hiden")
        this.state = {
            datas : []

        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.datas != this.props.data){
            this.setState({datas : this.props.data});
        }else{
            console.log("Component is updating");
            console.log(this.state.datas)
        }
        document.getElementById('loading').classList.add("hiden")
    }
    updateMessageBox = (data)=>{

    }
    render(){
        return(
            <div className="pt-3">
                <p className="mb-2">Hasil Pesan</p>
                {this.state.datas.map(data => (<MessageBox msg={data.message} key={data.id} date={data.date} />))}
            </div>
        )
    }
}
export default MessageBoxContainer