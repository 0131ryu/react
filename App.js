import React from 'react';
import { Navbar, Container, Nav, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

  <Jumbotron className="background">
  <h1>20% Season Off</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>
    

    <div className="container">
      <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"/>
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
