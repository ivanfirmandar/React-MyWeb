import React from "react";
import NavbarA from "../containers/NavBar";
import Development from "../containers/Development"

class BlogPage extends React.Component {
  componentDidMount(){
    document.getElementById('loading').classList.add("hiden")
  }
  render() {
    return (
      <div>
        <NavbarA />
        <Development />
      </div>
    );
  }
}
export default BlogPage;
