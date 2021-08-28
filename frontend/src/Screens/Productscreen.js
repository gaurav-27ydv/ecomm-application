import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../Components/Rating";
import products from "../products";

const Productscreen = ({ match }) => {
  const product = products.find((product) => product._id === match.params.id);
  return (
    <div>
      <Link className="btn btn-md btn-outline-dark m-1" to="/">
        Back
      </Link>
      <Row>
        <Col sm={12} md={5}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col sm={12} md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>{product.name}</ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={product.numReviews} />
            </ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price: {product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Button
                    classnName="btn btn-outline-dark"
                    type="button"
                    disabled={product.countInStock <= 0}
                  >
                    Buy Now
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Productscreen;
