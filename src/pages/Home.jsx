import React from "react";
import ContentHome from "../containers/ContentHome"
import "../styles.css"
import NavbarA from "../containers/NavBar";

class HomePage extends React.Component {
  componentDidMount(){
    document.getElementById('loading').classList.add("hiden")
  }
  render() {
    return (
      <div>
        <NavbarA />
        <Alert key={idx} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
        <ContentHome />
      </div>
    );
  }
}
export default HomePage;
