import React from "react";
import NavbarA from "../containers/NavBar";
import { Alert } from "react-bootstrap";
import Development from "../containers/Development";
import ContactContainer from "../containers/ContactContainer"; 
import "./Pages.css";

class ContactmePage extends React.Component {
  
   render() {
     return (
       <div>
         <NavbarA />
         <div className="whiteArea" id="whiteArea"></div>
         <Alert variant="primary" className="hiden" id="alert-success"> 
            Pesan rahasia kepada Ivan udah kekirim, terima kasih ya
        </Alert>
        <Alert variant="danger" className="hiden" id="alert-failed"> 
            Pesan rahasia kepada Ivan gagal kekirim, coba lagi nanti ya
        </Alert>
         {/* <Development/> */}
         <ContactContainer/>
       </div>
     );
   }
}
export default ContactmePage;
