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
            console.log("Updating")
        }

        document.getElementById('loading').classList.add("hiden")
    }
    updateMessageBox = (data)=>{

    }
    render(){
        return(
            <div className="pt-3">
                <p className="mb-2">Hasil Pesan</p>
                {this.state.datas.map(data => {
                    if (data.access == "public") {
                        return (<MessageBox msg={data.message} key={data.id} date={data.date} access={data.access} />)
                    }else{
                        return (<MessageBox msg={<b className="redText">Anda tidak dapat melihat pesan ini</b>} key={data.id} date={data.date} access={data.access}/>)
                    }
                    })}
            </div>
        )
    }
}
export default MessageBoxContainer