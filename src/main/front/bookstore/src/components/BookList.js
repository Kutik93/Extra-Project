import React, {Component} from 'react';
import {Card, Table, Image, ButtonGroup, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';   //służy do komunikacji backend-fronend



export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books : []
        };
    }

    componentDidMount(){
        this.findAllBooks();
    }

    findAllBooks() {
        axios.get("http://localhost:8080/books")
        .then(response => response.data)
        .then((data) => {
        this.setState({books: data});
        });
    }

render() {

        return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={faListUl} /> Book List </Card.Header>
            <Card.Body>
                <Table bordered hover striped variant='dark'>
                <thead>
                    <tr>
          <th>Title</th>
          <th>Author</th>
          <th>ISBN Number</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
        this.state.books.length === 0 ?
        <tr algin={"center"}>
          <td colSpan={5}> Books Available. </td>
        </tr> :
        this.state.books.map((book) => (
        <tr key={book.id}>
            <td>
            <Image src={book.photoUrl} roundedCircle width="25" height="25" /> {book.title}
            </td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td>{book.price}</td>
            <td>
                <ButtonGroup>
                    <Button size="sm" variant="outline-primary"> <FontAwesomeIcon icon={faEdit} /> </Button> {' '}
                    <Button size="sm" variant="outline-danger"> <FontAwesomeIcon icon={faTrash} /> </Button>
                </ButtonGroup>
            </td>
        </tr>
        ))
        }
      </tbody>
                </Table>
            </Card.Body>
        </Card>
        );
}

}
