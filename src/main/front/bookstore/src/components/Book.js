import React, {Component} from 'react';
import axios from 'axios';
import MyToast from './MyToast';

import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faList, faEdit} from '@fortawesome/free-solid-svg-icons';

export default class Book extends Component {
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
                axios.post("http://localhost:8080/books", book)
                .then(response => {
                    if(response.data != null) {
                        this.setState({"show":true, "method":"post"});
                        setTimeout(() => this.setState({"show":false}), 3000);
                    } else {
                        this.setState({"show":false});
                    }
            });

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
                axios.get("http://localhost:8080/books/"+bookId)
                    .then(response => {
                        if(response.data != null) {
                            this.setState({
                                id: response.data.id,
                                title: response.data.title,
                                author: response.data.author,
                                photoUrl: response.data.photoUrl,
                                isbn: response.data.isbn,
                                price: response.data.price
                            });
                        }
                    }).catch((error) => {
                        console.error("Error - "+error);
                    });
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

                    axios.put("http://localhost:8080/books", book)
                        .then(response => {
                            if(response.data != null) {
                                this.setState({"show":true, "method":"put"});
                                setTimeout(() => this.setState({"show":false}), 3000);
                                setTimeout(() => this.bookList(), 3000);
                            } else {
                                this.setState({"show":false});
                            }
                        });

                    this.setState(this.initialState);
                }

    render() {

    const {title, author, photoUrl, isbn, price} = this.state;

        return (
                 <div>
                     <div style={{"display":this.state.show ? "block" : "none"}}>
                     <MyToast show = {this.state.show} message = {this.state.method === "put" ? "Book Updated Successfully." : "Book Saved Successfully."} type = {"success"}/>
                 </div>
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} /> {this.state.id ? "Update Book" : "Add New Book"} Add New Book </Card.Header>
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
}