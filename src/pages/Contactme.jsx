import React from "react";
import NavbarA from "../containers/NavBar";
import Development from "../containers/Development";
import ContactContainer from "../containers/ContactContainer"; 

class ContactmePage extends React.Component {
   render() {
     return (
       <div>
         <NavbarA />
         <Development/>
         {/* <ContactContainer /> */}
       </div>
     );
   }
}
export default ContactmePage;
