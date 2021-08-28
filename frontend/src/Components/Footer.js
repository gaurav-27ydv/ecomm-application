import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#20374c" }}>
      <Row>
        <Col className="text-center">
          <footer>Copyright &copy; FoxHOUND</footer>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
