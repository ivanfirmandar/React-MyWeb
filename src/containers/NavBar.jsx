import react from "react";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/logo.png";
import Nav from "react-bootstrap/Nav";

class NavbarA extends react.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={logo} className="imgIcon" alt=""/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="hovered-nav">Home</Nav.Link>
            <Nav.Link href="/blog" className="hovered-nav">Blog</Nav.Link>
            <Nav.Link href="/about" className="hovered-nav">About</Nav.Link>
            <Nav.Link href="/contactme" className="hovered-nav">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarA;
