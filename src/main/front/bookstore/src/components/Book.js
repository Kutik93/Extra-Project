import React, {Component} from 'react';
import {Card, Form, Button, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faSave } from '@fortawesome/free-solid-svg-icons'


export default class Book extends Component {
    constructor(props) {
        super(props);
        this.state= {title:'', author:'', isbnNumber:'', price:'', URL:''};
        this.bookChange= this.bookChange.bind(this);
        this.submitBook=this.submitBook.bind(this);
    }

    submitBook(event){
        alert('Title: ' +this.state.title+' Author: ' +this.state.author+' ISBN Number: ' +this.state.isbnNumber+' Price: ' +this.state.price+' Cover Photo URL: ' +this.state.URL);
        event.preventDefault();
    }

    bookChange(event){
        this.setState({
        [event.target.name]:event.target.value
        });
    }

render() {
        return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add New Book</Card.Header>
            <Form onSubmit={this.submitBook} id="bookFormId">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control required type="test" value={this.state.title} onChange={this.bookChange} name="title" placeholder="Enter Book Title" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control required type="test" value={this.state.author} onChange={this.bookChange} name="author" placeholder="Enter Book Author" />
        </Form.Group>
</Row>

<Row className="mb-3">
        <Form.Group as={Col} controlId="formGridIsbnNumber">
                  <Form.Label>ISBN Number</Form.Label>
                  <Form.Control required type="test" value={this.state.isbnNumber} onChange={this.bookChange} name="isbnNumber" placeholder="Enter Book ISBN Number" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control required type="test" value={this.state.price} onChange={this.bookChange} name="price" placeholder="Enter Book Price" />
                </Form.Group>
      </Row>

<Form.Group className="mb-3" controlId="formGridCoverPhotoURL">
        <Form.Label>Cover Photo URL</Form.Label>
        <Form.Control required type="test" value={this.state.URL} onChange={this.bookChange} name="URL" placeholder="Enter Book Cover Photo URL" />
      </Form.Group>
<Card.Footer class="card text-right">
      <Button size="sm" variant="success" type="submit">
       <FontAwesomeIcon icon={faSave} /> Add
      </Button>
      </Card.Footer>
    </Form>
</Card>
        );
    }
}

