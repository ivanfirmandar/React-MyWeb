import React from "react";
import NavbarA from "../containers/NavBar";
import Development from "../containers/Development";
import ContentAbout from "../containers/ContentAbout";

class AboutPage extends React.Component {
  componentDidMount(){
    document.getElementById('loading').classList.add("hiden")
  }
  render() {
    return (
      <div>
        <NavbarA />
        <ContentAbout />
      </div>
    );
  }
}
export default AboutPage;
