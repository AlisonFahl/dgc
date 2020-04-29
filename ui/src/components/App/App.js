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
                      <Chat comments={[
                          { id: 0, alias: 'Zé', date: new Date(), text: "Hello World" },
                          { id: 1, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 2, alias: 'Zé', date: new Date(), text: "Hello World" },
                          { id: 3, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 4, alias: 'Zé', date: new Date(), text: "Hello World" },
                          { id: 5, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 6, alias: 'Zé', date: new Date(), text: "Hello World" },
                          { id: 7, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 8, alias: 'Zé', date: new Date(), text: "Hello World" },
                          { id: 9, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 10, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 11, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 12, alias: 'Bob', date: new Date(), text: "Test World" },
                          { id: 13, alias: 'Bob', date: new Date(), text: "Test World" }]} />
                  </Col>
              </Row>
          </Container>
      </>
  );
}

export default App;
