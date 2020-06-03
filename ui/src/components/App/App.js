import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Chat from './../Chat/Chat';
import { AppContextProvider } from './../../context/AppContext.js';

function App() {
  return (
      <>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand>Decentralized Global Chat</Navbar.Brand>
          </Navbar>
          
          <Container fluid>
              <AppContextProvider>
                  <Row>
                      <Col>
                          <Chat />
                      </Col>
                  </Row>
              </AppContextProvider>
          </Container>
      </>
  );
}

export default App;
