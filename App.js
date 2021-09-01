import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import samsung1 from './images/samsung1.jpg';
import samsung2 from './images/samsung2.jpg';
import samsung3 from './images/samsung3.jpg';
import samsung4 from './images/samsung4.jpg';
import apple1 from './images/apple1.jpg';
import apple2 from './images/apple2.jpg';
import apple3 from './images/apple3.jpeg';

import SItem from './SItem.js';

function App() {

  let [SItems, SItemsChange] = useState(SItem);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Electronic Mall</Navbar.Brand>
    <Nav.Link >Introduce</Nav.Link>
        <Nav.Link >Goods</Nav.Link>
        <Nav.Link >location</Nav.Link>
        <Nav.Link >inquiry</Nav.Link>
  </Container>
</Navbar>
  
    
  <div className="ad">
      <h1 className="adTitle">[ 오픈 한정 행사 : 최대 30% 세일 ] </h1>
  </div>

  <div className="container">
        <div className="row">
        { 
            SItems.map((a,i)=>{
             return <SList SItems={SItems[i]} />
            })
        }
        </div>
      </div>

    </div>
  );
}

function SList(props) {
  return (
    <div className="col-md-4">
            <img src={samsung1} width="100%" className="firstImg"/>
            <h4>{ props.SItems.title }</h4>
            <p>{ props.SItems.content } & { props.SItems.price } </p>
          </div>
  )
}

export default App;
