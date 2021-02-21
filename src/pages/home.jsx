import React from "react";
import NavbarA from "../containers/NavBar";
import SeminarList from "../containers/SeminarList";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <NavbarA />
        <SeminarList />
      </div>
    );
  }
}
export default HomePage;
