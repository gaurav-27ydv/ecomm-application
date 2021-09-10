import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";
import { logout } from "../Actions/userActions";

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

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
              {userInfo ? (
                <NavDropdown
                  title={
                    <i className="fas fa-user">
                      {"  "}
                      {userInfo.name}
                    </i>
                  }
                  id="username"
                >
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>

                  <NavDropdown.Item onClick={logoutHandler}>
                    Log-out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavLink className="nav-link" to="/login">
                  <i className="fas fa-user"></i> Log-in
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
