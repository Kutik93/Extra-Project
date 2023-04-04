import React, { Component } from 'react';
import {connect} from 'react-redux';
import { authenticateUser } from '../services/index';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faEnvelope, faLock, faUndo} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Card, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state= this.initialState;
    }

    initialState = {
        email:'',
        password: '',
        error:''
    }

    credentialChange = event => {
                this.setState({
                    [event.target.name] : event.target.value
                });
            };

    resetLoginForm = () => {
                this.setState(() => this.initialState);
            };

    validateUser = () => {
        this.props.authenticateUser(this.state.email, this.state.password);
        setTimeout(() => {
            if(this.props.auth.isLoggedIn) {
                return this.props.history.push("/");
            } else {
                this.resetLoginForm();
                this.setState({"error":"Invalid email and password"});
            }
        }, 500);
    };

  render() {
    const {email, password, error} = this.state;


    return (
      <Row className="justify-content-md-center">
        <Col xs={5}>
            {error && <Alert variant="danger">{error}</Alert>}
            <Card className={"bg-dark text-white "} >
                <Card.Header className={"text-center bg-dark text-white"}>
                    <FontAwesomeIcon icon={faSignInAlt}  /> Login
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Form.Group as={Col}> 
                            <InputGroup className="input-group mb-3">
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                                <FormControl required autoComplete="off" type="text" name="email" value={email} className={"bg-dark text-white"} placeholder="Enter Email Address" onChange={this.credentialChange} />  
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <InputGroup>
                                <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                <FormControl required autoComplete="off" type="text" name="password" value={password} className={"bg-dark text-white "} placeholder="Enter Password" onChange={this.credentialChange}/>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                </Card.Body>
                <Card.Footer className={"bg-dark text-white"} style={{"textAlign":"right"}} >
                    <Button size='sm' type='button' variant='success' onClick={this.validateUser} disabled={this.state.email.length=== 0 || this.state.password.length===0} >
                        <FontAwesomeIcon icon={faSignInAlt}/> Login
                    </Button> {' '}
                    <Button size='sm' type='button' variant='info' onClick={this.resetLoginForm} disabled={this.state.email.length=== 0 && this.state.error.length===0}>
                        <FontAwesomeIcon icon={faUndo}/> Reset
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        authenticateUser: (email, password) => dispatch(authenticateUser(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);