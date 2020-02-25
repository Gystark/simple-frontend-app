import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {
    CREATE_POST_ROUTE,
    DELETE_POST_ROUTE,
    HOME_ROUTE, LOGOUT_ROUTE,
    POSTS_ROUTE,
    UPDATE_POST_ROUTE
} from "../routes";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

const NavMenu = () => {
    return (
        <Navbar bg="light" expand="md">
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex">
                <Nav className="mx-auto">
                    <Navbar.Brand href="/">Simple Frontend App</Navbar.Brand>
                    <LinkContainer to={HOME_ROUTE} exact={false}><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to={POSTS_ROUTE} exact={true}><Nav.Link>Posts</Nav.Link></LinkContainer>
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to={CREATE_POST_ROUTE} exact={true}><NavDropdown.Item>Create Post</NavDropdown.Item></LinkContainer>
                        <LinkContainer to={UPDATE_POST_ROUTE} exact={true}><NavDropdown.Item>Update Post</NavDropdown.Item></LinkContainer>
                        <LinkContainer to={DELETE_POST_ROUTE} exact={true}><NavDropdown.Item>Delete Post</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <LinkContainer to={LOGOUT_ROUTE} exact={true}><Nav.Link>Logout</Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;
