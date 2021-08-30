//Import React Hook Components
import React, { useState, useEffect } from "react";
import axios from "axios";
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
//Import Components
import Rating from "../Components/Rating";

const Productscreen = ({ match }) => {
  //Set up React Hooks
  const [product, setProduct] = useState([]);
  //Fetch product info from backend
  useEffect(() => {
    let isMounted = true;
    const fetchProduct = async () => {
      const data = await axios
        .get(`/api/products/${match.params.id}`)
        .then((res) => res.data);
      if (isMounted) setProduct(data, []);
    };
    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, [match.params.id]);
  return (
    <div>
      <Link className="btn btn-outline-dark" to="/">
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
                  <Button type="button" disabled={product.countInStock === 0}>
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
