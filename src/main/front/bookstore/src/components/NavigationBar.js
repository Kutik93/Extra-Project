import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../services/index';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus, faRightToBracket, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";



class NavigationBar extends Component {
    logout = () => {
        this.props.logoutUser();
    };



    render() {
        const guestLinks = (
            <>
                <div className='mr-auto'></div>
                <Nav className="mb-3 navbar-right">
                    <Link to={"register"} className="nav-link"><FontAwesomeIcon icon={faRightToBracket} /> Register</Link>
                    <Link to={"login"} className="nav-link"><FontAwesomeIcon icon={faUserPlus}/> Login</Link>
                </Nav>
            </>
        );

        const userLinks = (
            <>
                <Nav className="mr-auto">
                    <Link to={"add"} className="nav-link">Add Book</Link>
                    <Link to={"list"} className="nav-link">Book List</Link>
                    <Link to={"users"} className="nav-link">User List</Link>
                </Nav> 
                <Nav>
                    <Link to={"logout"} className="nav-link" onClick={this.logout}><FontAwesomeIcon icon={faSignOutAlt}/> Logout</Link>    
                </Nav>           
            </>
        )


        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="https://cdn-icons-png.flaticon.com/512/1251/1251715.png?w=826&t=st=1679843166~exp=1679843766~hmac=212629bdb09ba0b73eb71a9a1498e9a1b99fa0639e4efaacf2af4854ae73f064" width="25" height="25" alt="brand"/> Bookstore
                </Link>
                {this.props.auth.isLoggedIn ? userLinks : guestLinks}
            </Navbar>
        );
    };
};

const mapStoreToProps = state => {
    return{
        auth: state.auth
    };
};

const mapDispatchToProps = dispatch => {
    return{
        logoutUser: () => dispatch(logoutUser())
    };
};

export default connect(mapStoreToProps, mapDispatchToProps)(NavigationBar);