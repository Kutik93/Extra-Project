import './App.css';

import {Container, Col, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import Book from './components/Book';
import BookList from './components/BookList';



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
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/add" element={<Book/>}/>
                <Route path="/list" element={<BookList/>}/>
            </Routes>
        </Col>
        </Row>
    </Container>

    <Footer/>

    </Router>
  );
}

export default App;
