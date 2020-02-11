import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";
import Form from "react-bootstrap/Form";
import ErrorMessage from "./ErrorMessage";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SuccessMessage from "./SuccessMessage";
import {addPost} from "../api";
import {extractServerError} from "../common";

const CreatePost = () => {
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [error, setError] = React.useState(undefined);
    const [success, setSuccess] = React.useState(undefined);

    const onSubmit = (event) => {
        event.preventDefault();

        if (title && body) {
            addPost(title, body).then((res) => {
                setError(undefined);
                setTitle("");
                setBody("");
                setSuccess("Post created successfully");
            }).catch((error) => {
                setSuccess(undefined);
                setError(extractServerError(error));
            });
        }
    };

    return (
        <Container fluid>
            <h2 className={classNames("text-center", "mt-5")}>Create a post</h2>
            <Row className={classNames("mx-auto", "mt-5")}>
                <Col md={{span: 4, offset: 4}} className="text-center">
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="createPostTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={(event) => setTitle(event.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="createPostBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" onChange={(event) => setBody(event.target.value)} />
                        </Form.Group>
                        <Button variant="outline-primary" type="submit" className="mt-2">
                            Create post
                        </Button>
                    </Form>
                </Col>
            </Row>
            {error !== undefined && <ErrorMessage message={error}/>}
            {success !== undefined && <SuccessMessage message={success} />}
        </Container>
    );
};

export default CreatePost;
