import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacts = () => (
 <Container>
    <Row>
      <Col md={6}>
        <h1>Contact Us</h1>
        <p>
          If you have any questions or concerns, please reach out to one of our support agents below:
        </p>
        <ListGroup>
          <ListGroupItem>Name: John Doe</ListGroupItem>
          <ListGroupItem>Email: john.doe@example.com</ListGroupItem>
          <ListGroupItem>Phone: (123) 456-7890</ListGroupItem>
        </ListGroup>
        <ListGroup>
          <ListGroupItem>Name: Jane Smith</ListGroupItem>
          <ListGroupItem>Email: jane.smith@example.com</ListGroupItem>
          <ListGroupItem>Phone: (123) 456-7890</ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={6}>
        <img src="https://via.placeholder.com/500" alt="Contact Us" />
      </Col>
    </Row>
 </Container>
);

export default Contacts;