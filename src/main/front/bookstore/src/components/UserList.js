import React, {Component} from 'react';
import {Card, Table} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';

export default class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users : []
        };
    }

    componentDidMount() {
        this.findAllRandomUsers();
    }

    findAllRandomUsers() {
        fetch("https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole")
        .then(response => response.json())
            .then((data) => {
                this.setState({users: data});
            });
    };

    render() {

        return (
            <div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faUsers} /> User List</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant="dark">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Address</td>
                                    <td>Created</td>
                                    <td>Balance</td>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.users.length === 0 ?
                                    <tr align="center">
                                        <td colSpan="5">No Users Available</td>
                                    </tr> :
                                    this.state.users.map((users) => (
                                    <tr key={users}>
                                    <td>{users.first}</td>
                                    <td>{users.email}</td>
                                    <td>{users.address}</td>
                                    <td>{users.created}</td>
                                    <td>{users.balance}</td>
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