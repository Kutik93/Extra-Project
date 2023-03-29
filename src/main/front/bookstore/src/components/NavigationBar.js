import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';



export default class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="https://cdn-icons-png.flaticon.com/512/1251/1251715.png?w=826&t=st=1679843166~exp=1679843766~hmac=212629bdb09ba0b73eb71a9a1498e9a1b99fa0639e4efaacf2af4854ae73f064" width="25" height="25" alt="brand"/> Bookstore
                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add Book</Link>
                    <Link to={"list"} className="nav-link">Book List</Link>
                    <Link to={"users"} className="nav-link">User List</Link>
                </Nav>
                <Nav className="navbar-right">
                    <Link to={"login"} className="nav-link">Login</Link>
                    <Link to={"register"} className="nav-link">Register</Link>
                </Nav>

            </Navbar>
        );
    }
}