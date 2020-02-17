import React from "react";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const Home = () => {
    return (
        <Container fluid id="homeContainer">
            <Row className="mt-5">
                <Col md={{span: 5, offset: 0}} className="mx-auto">
                    <h1>Welcome to the Simple Frontend App!</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 3, offset: 0}} className="mx-auto">
                    <div className="mt-3">It offers the following functionality:
                        <ListGroup variant="flush">
                            <ListGroup.Item>Login</ListGroup.Item>
                            <ListGroup.Item>Logout</ListGroup.Item>
                            <ListGroup.Item>This simple Home page</ListGroup.Item>
                            <ListGroup.Item>Posts page, with sort, order and search functions</ListGroup.Item>
                            <ListGroup.Item>Create posts</ListGroup.Item>
                            <ListGroup.Item>Edit posts</ListGroup.Item>
                            <ListGroup.Item>Delete posts</ListGroup.Item>
                        </ListGroup>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{span:6, offset: 0}} className={classNames("mx-auto", "mt-3")}>
                    <h3>Note that it has a few known bugs, can you find all of them using Cypress?</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;
