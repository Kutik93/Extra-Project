import React, { Component } from 'react'
import { Form, InputGroup} from 'react-bootstrap'


export default class Register extends Component {
  render() {
    return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      </>
    );
  }
}