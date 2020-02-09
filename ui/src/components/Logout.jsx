import React from "react";
import {AUTH_TOKEN_KEY} from "../common";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {LOGIN_ROUTE} from "../routes";

const Logout = () => {
    const history = useHistory();

    const onLogout = () => {
        localStorage.removeItem(AUTH_TOKEN_KEY);
        history.push(LOGIN_ROUTE);
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <h2>Are you sure you would like to log out?</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={{span: 4, offset: 2}}>
                    <Button variant="outline-success" onClick={() => onLogout()}>Log out</Button>
                </Col>
                <Col md={{span: 4, offset: 1}}>
                    <Button variant="outline-danger" onClick={() => history.goBack()}>Cancel</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Logout;
