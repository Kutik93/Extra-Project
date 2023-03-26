import React from 'react';
import Card from 'react-bootstrap/Card';
import {Row} from 'react-bootstrap';

class Welcome extends React.Component {
        render() {
        return (
<Row>
            <Card className="bg-dark">
                 <Card.Body className="bg-dark text-white">
                 <Card.Title>Welcome to your online collection of books.</Card.Title>
                 <Card.Text> A room without books is a body without soul. - Cyceron </Card.Text>
                 </Card.Body>
            </Card>
        </Row>
        );
        }
}

export default Welcome;