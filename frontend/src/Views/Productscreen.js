//Import React Hook Components
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { listProductDetails } from "../Actions/productAction";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

const Productscreen = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);
  return (
    <div className="mx-4 my-2">
      <Link className="btn btn-outline-dark" to="/">
        Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error} </Message>
      ) : (
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
      )}
    </div>
  );
};

export default Productscreen;
