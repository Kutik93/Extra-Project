import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar'
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from 'react-bootstrap';

function App() {
    const marginTop ={
    marginTop:"20px"
    }

  return (
    <div className="App">
    <NavigationBar/>
    <Container>
        <Col lg={12} style={marginTop}>
        <Row>
            <Card className="bg-dark">
                 <Card.Body className="bg-dark text-white">
                 <Card.Title>Special title treatment</Card.Title>
                 <Card.Text> With supporting text below as a natural lead-in to additional content.</Card.Text>
                 </Card.Body>
            </Card>
        </Row>
        </Col>
    </Container>
    </div>
  );
}

export default App;
