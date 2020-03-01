import React from "react";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Table} from "react-bootstrap";

const Home = () => {
    let taskNo = 1;

    return (
        <Container fluid id="homeContainer">
            <Row className="mt-5">
                <Col md={{span: 5, offset: 0}} className="mx-auto">
                    <h1>Welcome to the Simple Frontend App!</h1>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 5, offset: 0}} className="mx-auto">
                    <h2>The backend API is documented on <a href="/docs" target="_blank">/docs</a></h2>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8, offset: 0}} className={classNames("mx-auto", "mt-3")}>
                    <Table bordered hover responsive>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Suggested Task</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Fix the failing Logout test</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test that clicking the Log out button on the Logout screen logs the user out</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test that clicking the Cancel button on the Logout screen does not log the user out</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test that the Home screen displays the "Welcome to the Simple Frontend App!" title</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test that the Posts screen shows the expected posts from a stubbed API call</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test that the Posts screen shows the expected error message when it fails to fetch posts from the API</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test sorting, ordering and searching on the Posts screen (combined, separately or both)</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test that clicking Reset on the Posts screen resets sort, order and search criteria</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test successful post creation on Create Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test unsuccessful post creation on Create Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test successful post update on Update Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test unsuccessful post creation on Update Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test updating multiple posts on Update Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test successful post deletion on Delete Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test unsuccessful post deletion on Delete Post</td>
                        </tr>
                        <tr>
                            <td>{taskNo++}</td>
                            <td>Test deleting multiple posts on Delete Post</td>
                        </tr>
                        </tbody>
                    </Table>
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
