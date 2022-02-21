import React from "react";
import  ReactRouterBootstrap,{ Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav  className="me-auto">
          <Link to="/" style={{paddingLeft:"20px" ,color:"white"}}>Home</Link>
          <Link to="/products" style={{color:"white"}}>Products</Link> 
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
