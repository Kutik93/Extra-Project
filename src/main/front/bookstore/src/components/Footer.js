import React, {Component} from 'react';
import {Col, Navbar, Container} from 'react-bootstrap';

export default class Footer extends Component {
 render() {
    let fullYear = new Date().getFullYear();

    return (
       <Container>
             <Navbar fixed="bottom" variant="dark" bg="dark">
              <Col lg={12} className="text-center text-muted">
                         <div>{fullYear} - {fullYear+1}, All Rights Reserved by DK </div>
              </Col>
             </Navbar>
           </Container>
    );
 }
}