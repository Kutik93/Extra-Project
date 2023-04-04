import React, { Component } from 'react'
import { Form, InputGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamation} from "@fortawesome/free-solid-svg-icons";

export default class Register extends Component {
  render() {
    return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faExclamation} fade /> </InputGroup.Text>
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