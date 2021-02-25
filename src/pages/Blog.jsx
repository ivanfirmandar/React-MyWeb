import React from "react";
import NavbarA from "../containers/NavBar";
import Development from "../containers/Development"
import "./Pages.css";

class BlogPage extends React.Component {
  componentDidMount(){
    document.getElementById('loading').classList.add("hiden")
  }
  render() {
    return (
      <div>
        <NavbarA />
        <div className="whiteArea"></div>
        <Development />
      </div>
    );
  }
}
export default BlogPage;
