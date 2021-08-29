import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../Components/Product";

const Homescreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const data = await axios.get("/api/products/").then((res) => res.data);
      setProducts(data, []);
    };
    fetchProducts();
  });
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col
            className="d-flex align-items-stretch"
            key={product._id}
            sm={12}
            md={6}
            lg={4}
            xl={3}
          >
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Homescreen;
