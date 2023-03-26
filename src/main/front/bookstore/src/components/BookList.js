import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListUl } from '@fortawesome/free-solid-svg-icons'



export default class BookList extends Component {
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
        </tr>
      </thead>
      <tbody>
        <tr algin={"center"}>
          <td colSpan={4}> No Books Avaliable. </td>
        </tr>
      </tbody>
                </Table>
            </Card.Body>
        </Card>
        );
}

}
