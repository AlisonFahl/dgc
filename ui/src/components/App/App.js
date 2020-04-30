import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chat from './../Chat/Chat';

function App() {
  return (
      <>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand>Decentralized Global Chat</Navbar.Brand>
          </Navbar>
          <Container>
              <Row>
                  <Col xs={{ span: 8, offset: 2 }} >
                      <Chat/>
                  </Col>
              </Row>
          </Container>
      </>
  );
}

export default App;