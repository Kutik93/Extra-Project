import React, {Component} from 'react';
import MyToast from './MyToast';
import {connect} from 'react-redux';
import {saveBook, fetchBook, updateBook} from '../services/index';

import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faList, faEdit} from '@fortawesome/free-solid-svg-icons';

class Book extends Component {
    constructor(props) {
        super(props);
        this.state= {title:'', author:'', isbn:'', price:'', photoUrl:''};
        this.state = this.initialState;
        this.state.show = false;
        this.bookChange= this.bookChange.bind(this);
        this.submitBook=this.submitBook.bind(this);
    }

    initialState = {
            id:'', title:'', author:'', photoUrl:'', isbn:'', price:''
        };

    submitBook= event => {
        event.preventDefault();

        const book = {
                    title: this.state.title,
                    author: this.state.author,
                    photoUrl: this.state.photoUrl,
                    isbn: this.state.isbn,
                    price: this.state.price
                };

            this.props.saveBook(book);
                    setTimeout(() => {
                        if(this.props.bookObject.book != null) {
                            this.setState({"show":true, "method":"post"});
                            setTimeout(() => this.setState({"show":false}), 3000);
                        } else {
                            this.setState({"show":false});
                        }
                    }, 2000);

        this.setState(this.initialState);
            };

         componentDidMount() {
                const bookId = +this.props.match.params.id;
                if(bookId) {
                    this.findBookById(bookId);
                }
            }

    resetBook = () => {
            this.setState(() => this.initialState);
     }


      bookChange= event => {
            this.setState({
            [event.target.name]:event.target.value
            });
        };

        findBookById = (bookId) => {
           this.props.fetchBook(bookId);
                   setTimeout(() => {
                       let book = this.props.bookObject.book;
                       if(book != null) {
                           this.setState({
                           id: book.id,
                            title: book.title,
                            author: book.author,
                            photoUrl: book.photoUrl,
                            isbn: book.isbn,
                            price: book.price
                       });
                   }
           }, 1000);
        };

                bookList = () => {
                    return this.props.history.push("/list");
                };

                updateBook = event => {
                    event.preventDefault();

                    const book = {
                        id: this.state.id,
                        title: this.state.title,
                        author: this.state.author,
                        photoUrl: this.state.photoUrl,
                        isbn: this.state.isbn,
                        price: this.state.price,
                        language: this.state.language
                    };


                    this.props.updateBook(book);
                            setTimeout(() => {
                                if(this.props.bookObject.book != null) {
                                    this.setState({"show":true, "method":"put"});
                                    setTimeout(() => this.setState({"show":false}), 3000);
                                } else {
                                    this.setState({"show":false});
                                }
                            }, 2000);
                    this.setState(this.initialState);
                };

    render() {

    const {title, author, photoUrl, isbn, price} = this.state;

        return (
                 <div>
                     <div style={{"display":this.state.show ? "block" : "none"}}>
                     <MyToast show = {this.state.show} message = {this.state.method === "put" ? "Book Updated Successfully." : "Book Saved Successfully."} type = {"success"}/>
                 </div>
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Book" : "Add New Book"} </Card.Header>
            <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateBook : this.submitBook} id="bookFormId">
            <Card.Body>
                      <Row>
                        <Form.Group as={Col} controlId="formGridTitle">
                          <Form.Label>Title</Form.Label>
                           <Form.Control required autoComplete="off"
                           type="text"
                           value={title}
                           onChange={this.bookChange}
                           name="title"
                           className = {"bg-dark text-white"}
                           placeholder="Enter Book Title" />
                         </Form.Group>
                         <Form.Group as={Col} controlId="formGridAuthor">
                          <Form.Label>Author</Form.Label>
                           <Form.Control required autoComplete="off"
                           type="text"
                           value={author}
                           onChange={this.bookChange}
                           name="author"
                           className = {"bg-dark text-white"}
                           placeholder="Enter Book Author" />
                         </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group as={Col} controlId="formGridIsbnNumber">
                          <Form.Label>ISBN Number</Form.Label>
                           <Form.Control required autoComplete="off"
                           type="text"
                           value={isbn}
                           onChange={this.bookChange}
                           name="isbn"
                           className = {"bg-dark text-white"}
                           placeholder="Enter Book ISBN Number" />
                         </Form.Group>
                         <Form.Group as={Col} controlId="formGridPrice">
                          <Form.Label>Price</Form.Label>
                           <Form.Control required autoComplete="off"
                           type="text"
                           value={price}
                           onChange={this.bookChange}
                           name="price"
                           className = {"bg-dark text-white"}
                           placeholder="Enter Book Price" />
                         </Form.Group>
                      </Row>
                        <Form.Group controlId="formGridURL">
                                <Form.Label>Cover Photo URL</Form.Label>
                                <Form.Control required autoComplete="off"
                                type="test"
                                value={photoUrl}
                                onChange={this.bookChange}
                                name="photoUrl"
                                className="photoUrl"
                                placeholder="Enter Book Cover Photo URL" />
                              </Form.Group>
            </Card.Body>
            <Card.Footer style={{"textAlign":"right"}}>
                  <Button size="sm" variant="success" type="submit">
                   <FontAwesomeIcon icon={faSave} /> {this.state.id ? "Update" : "Save"}
                  </Button>{' '}
                  <Button size="sm" variant="info" type="button" onClick={this.bookList.bind()}><FontAwesomeIcon icon={faList} /> Book List
                  </Button>

                  </Card.Footer>
            </Form>
        </Card>
        </div>
        );
    }
};
const mapStateToProps = state => {
    return {
        bookObject: state.book,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveBook: (book) => dispatch(saveBook(book)),
        fetchBook: (bookId) => dispatch(fetchBook(bookId)),
        updateBook: (book) => dispatch(updateBook(book))

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);