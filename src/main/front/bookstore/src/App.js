import React from 'react';
import './App.css';

import {Container, Col, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';
import UserList from './components/UserList';


function App() {
    const marginTop ={
    marginTop:"20px"
    }

  return (
    <Router>
    <NavigationBar/>
    <Container>
    <Row>
        <Col lg={12} style={marginTop}>
            <Switch>
                     <Route path="/" exact component={Welcome}/>
                     <Route path="/add" exact component={Book}/>
                     <Route path="/list" exact component={BookList}/>
                     <Route path="/edit/:id" exact component={Book}/>
                     <Route path="/users" exact component={UserList}/>
            </Switch>
        </Col>
        </Row>
    </Container>

    <Footer/>

    </Router>
  );
}

export default App;
