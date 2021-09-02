/*eslint-disable */

import React, {useState} from 'react';
import { Navbar, Container, Nav, Jumbotron, Button } from 'react-bootstrap';
import './App.css';
// import name from './data.js';
//import { name, name2 } from './data.js';
import Data from './data.js';
import Detail from './Detail.js';


import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
      <Nav.Link >Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

 
  <Switch>
    <Route exact path="/">
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
        {
          shoes.map((a, i) => { //a : shoes안에 들어간 하나하나의 데이터
            return <Card shoes={shoes[i]} i={i} key={i}/>
          })
        }
      </div>
    </div>
    </Route>

    <Route path="/detail/:id"> 
        <Detail shoes={shoes}/>
    </Route>

    {/* <Route path="/어쩌구" component={Modal}></Route> */}

    <Route path="/:id"> {/* /모든문자라는 경로 의미 */}
        <div> 아무거나 적었을 때 이걸 보여줌 </div>
    </Route>

    </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div>
       <img src={ "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg" } width="100%"/>
       <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content} <br/> { props.shoes.price }</p>
    </div>
  )
}



export default App;
