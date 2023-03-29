import React, {Component} from 'react';
import {Card, Table, Image, Button, ButtonGroup } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {deleteBook} from '../services/index';


class Book extends Component {

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
     };

        deleteBook = (bookId) => {
         this.props.deleteBook(bookId);
         setTimeout(() => {
             if(this.props.bookObject != null) {
                 this.setState({"show":true});
                 setTimeout(() => this.setState({"show":false}), 3000);
                 this.findAllBooks(this.state.currentPage);
             } else {
                 this.setState({"show":false});
             }
         }, 1000);
      };

render() {
            return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast children = {{show:this.state.show, message:"Book Deleted Successfully.", type:"danger"}}/>
            </div>
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faList} /> Book List</Card.Header>
                  <Card.Body>
                            <Table bordered hover striped variant="dark">
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
                              {this.state.books.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="5"> No Books Available.</td>
                                    </tr> :
                                    this.state.books.map((book) => (
                                    <tr key={book.id}>
                                        <td> <Image src={book.photoUrl} roundedCircle width="25" height="25" /> {book.title}
                                        </td>
                                        <td>{book.author}</td>
                                        <td>{book.isbn}</td>
                                        <td>{book.price}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Link to={"edit/"+book.id} className="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon={faEdit} /></Link>{' '}
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this, book.id)}> <FontAwesomeIcon icon={faTrash} /> </Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                               ))
                               }
                              </tbody>
                            </Table>
                  </Card.Body>
                </Card>
                </div>
            );
        }
    }

const mapStateToProps = state => {
    return {
        bookObject: state.book
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteBook: (bookId) => dispatch(deleteBook(bookId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);