import {Navbar} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import {
    CREATE_POST_ROUTE,
    DELETE_POST_ROUTE,
    HOME_ROUTE, LOGOUT_ROUTE,
    POSTS_ROUTE,
    SEARCH_ROUTE,
    UPDATE_POST_ROUTE
} from "../routes";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import React from "react";
import {useHistory} from "react-router-dom";

const NavMenu = () => {
    const history = useHistory();

    return (
        <Navbar bg="light" expand="md">
            <Navbar.Brand href="/" className="ml-4">Simple Frontend App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to={HOME_ROUTE}><Nav.Link>Home</Nav.Link></LinkContainer>
                    <LinkContainer to={POSTS_ROUTE}><Nav.Link>Posts</Nav.Link></LinkContainer>
                    <NavDropdown title="Admin" id="admin-nav-dropdown">
                        <LinkContainer to={CREATE_POST_ROUTE}><NavDropdown.Item>Create Post</NavDropdown.Item></LinkContainer>
                        <LinkContainer to={UPDATE_POST_ROUTE}><NavDropdown.Item>Update post</NavDropdown.Item></LinkContainer>
                        <LinkContainer to={DELETE_POST_ROUTE}><NavDropdown.Item>Delete Post</NavDropdown.Item></LinkContainer>
                    </NavDropdown>
                    <LinkContainer to={LOGOUT_ROUTE}><Nav.Link>Logout</Nav.Link></LinkContainer>
                </Nav>
                <Form inline onSubmit={(e) => history.push(SEARCH_ROUTE)}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavMenu;
