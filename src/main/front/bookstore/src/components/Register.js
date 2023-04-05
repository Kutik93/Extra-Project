import React, { Component } from 'react';
import {Row, Col, Card, Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope, faLock, faUndo, faUserPlus, faUser} from "@fortawesome/free-solid-svg-icons";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        name:'', email:'', password:'', contact:''
    };

    userChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        });
    };

    resetRegisterForm = () => {
        this.setState(() => this.initialState);
    };

    render() {
        const {name, email, password, contact} = this.state;

        return (
            <Row className="justify-content-md-center">
                <Col xs={5}>
                    <Card className={"bg-dark text-white"}>
                        <Card.Header className={"text-center bg-dark text-white"}>
                            <FontAwesomeIcon icon={faUserPlus}/> Register
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form.Group as={Col}>
                                    <InputGroup className="input-group mb-3">
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser}/> </InputGroup.Text>
                                        <FormControl autoComplete="off" type="text" name="name" value={name} onChange={this.userChange}
                                            className={"bg-dark text-white"} placeholder="Enter Name"/>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <InputGroup className="input-group mb-3">
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                        <FormControl required autoComplete="off" type="text" name="email" value={email} onChange={this.userChange}
                                            className={"bg-dark text-white"} placeholder="Enter Email Address"/>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <InputGroup className="input-group mb-3">

                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>

                                        <FormControl required autoComplete="off" type="password" name="password" value={password} onChange={this.userChange}
                                            className={"bg-dark text-white"} placeholder="Enter Password"/>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col}>
                                    <InputGroup>
                                            <InputGroup.Text><FontAwesomeIcon icon={faPhone}/></InputGroup.Text>

                                        <FormControl autoComplete="off" type="text" name="contact" value={contact} onChange={this.userChange}
                                            className={"bg-dark text-white"} placeholder="Enter Contact Number"/>
                                    </InputGroup>
                                </Form.Group>
                            </Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" type="button" variant="success"
                                disabled={this.state.email.length === 0 || this.state.password.length === 0}>
                                <FontAwesomeIcon icon={faUserPlus}/> Register
                            </Button>{' '}
                            <Button size="sm" type="button" variant="info" onClick={this.resetRegisterForm}>
                                <FontAwesomeIcon icon={faUndo}/> Reset
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
}