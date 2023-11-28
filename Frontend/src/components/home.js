import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
 <Container>
    <Row>
      <Col md={6}>
        <h1>Welcome to the Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus eget augue nec metus euismod lacinia.
        </p>
        <Button variant="primary">Get Started</Button>
      </Col>
      <Col md={6}>
        <img src="https://via.placeholder.com/500" alt="Home" />
      </Col>
    </Row>
 </Container>
);

export default Home;