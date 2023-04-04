import React from 'react';
import './App';

import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';
import UserList from './components/UserList';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';

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
                     <Route path="/register" exact component={Register}/>
                     <Route path="/login" exact component={Login}/>
                     <Route path="/logout" exact component={Login}/>
            </Switch>
        </Col>
        </Row>
    </Container>

    <Footer/>

    </Router>
  );
}

export default App;
