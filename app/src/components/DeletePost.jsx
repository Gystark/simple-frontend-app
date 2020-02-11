import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";
import Form from "react-bootstrap/Form";
import {deletePost, getPosts} from "../api";
import {extractServerError} from "../common";
import ErrorMessage from "./ErrorMessage";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SuccessMessage from "./SuccessMessage";

const DEFAULT_CHOICE_VALUE = "default-choice";

const DeletePost = () => {
    const [posts, setPosts] = React.useState([]);
    const [selectedPost, setSelectedPost] = React.useState(undefined);
    const [fetched, setFetched] = React.useState(false);
    const [error, setError] = React.useState(undefined);
    const [success, setSuccess] = React.useState(undefined);

    React.useEffect(() => {
        getPosts().then((res) => {
            setPosts(res.data);
            setFetched(true);
        }).catch((err) => {
            setError(extractServerError(err));
            setFetched(true);
        });
    }, [fetched]);

    const onSubmit = (event) => {
        event.preventDefault();

        if (selectedPost === undefined) {
            setError("Select a post and try again");
            return;
        }

        deletePost(selectedPost).then((res) => {
            setSuccess(`Post ${selectedPost} deleted successfully`);
            setSelectedPost(undefined);
        }).catch((error) => {
            setError(extractServerError(error));
            setSuccess(undefined);
        })
    };

    const onSelect = (value) => {
        if (value === DEFAULT_CHOICE_VALUE) {
            setSelectedPost(undefined);
            return;
        }

        setSelectedPost(value);
    };

    return (
        <Container fluid>
            <h2 className={classNames("text-center", "mt-5")}>Delete a post</h2>
            <Row className={classNames("mx-auto", "mt-5")}>
                <Col md={{span: 4, offset: 4}} className="text-center">
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="deletePostFormPostSelector">
                            <Form.Control as="select" onChange={(event) => onSelect(event.target.value)}>
                                <option key={DEFAULT_CHOICE_VALUE} value={DEFAULT_CHOICE_VALUE}>
                                    Select a post to delete
                                </option>
                                {posts.map((post) =>
                                    <option key={post.id} value={post.id}>{post.id}&nbsp;-&nbsp;{post.title}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Button variant="outline-danger" type="submit" className="mt-2">
                            Delete post
                        </Button>
                    </Form>
                </Col>
            </Row>
            {error !== undefined && <ErrorMessage message={error}/>}
            {success !== undefined && <SuccessMessage message={success} />}
        </Container>
    );
};

export default DeletePost;
