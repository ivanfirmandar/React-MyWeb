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
        <ContentHome />
      </div>
    );
  }
}
export default HomePage;
