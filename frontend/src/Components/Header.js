import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">DummyBuys</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Used ms-auto instead of ml-auto */}
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i> CART
              </NavLink>
              <NavLink className="nav-link" to="/login">
                <i className="fas fa-user"></i> Log-in
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
