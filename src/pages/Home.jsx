import React from "react";
import ContentHome from "../containers/ContentHome"
import "../styles.css"
import NavbarA from "../containers/NavBar";
import "./Pages.css";

class HomePage extends React.Component {
  componentDidMount(){
    document.getElementById('loading').classList.add("hiden")
  }
  render() {
    return (
      <div>
        <NavbarA />
        <div className="whiteArea"></div>
        <ContentHome />
      </div>
    );
  }
}
export default HomePage;
