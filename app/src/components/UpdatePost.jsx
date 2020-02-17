import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import classNames from "classnames";
import Form from "react-bootstrap/Form";
import {getPosts, updatePost} from "../api";
import {extractServerError} from "../common";
import ErrorMessage from "./ErrorMessage";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SuccessMessage from "./SuccessMessage";

const DEFAULT_CHOICE_VALUE = "default-choice";

const UpdatePost = () => {
    const [posts, setPosts] = React.useState([]);
    const [selectedPost, setSelectedPost] = React.useState(undefined);
    const [fetched, setFetched] = React.useState(false);
    const [error, setError] = React.useState(undefined);
    const [success, setSuccess] = React.useState(undefined);
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");

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

        updatePost(selectedPost, title, body).then((_) => {
            Object.assign(getPostById(selectedPost), {title, body});
            setError(undefined);
            setTitle("");
            setBody("");
            setSelectedPost(DEFAULT_CHOICE_VALUE);
            setSuccess("Post successfully updated");
        }).catch((error) => {
            setSuccess(undefined);
            setError(extractServerError(error));
        });
    };

    const getPostById = (id) => {
        return posts.find((p) => p.id.toString() === id?.toString());
    }

    const onSelect = (value) => {
        if (value === DEFAULT_CHOICE_VALUE || value === undefined) {
            setSelectedPost(undefined);
            return;
        }

        setSelectedPost(value);

        const post = getPostById(value);
        setTitle(post.title);
        setBody(post.body);
    };

    return (
        <Container fluid id="updatePostContainer">
            <h2 className={classNames("text-center", "mt-5")}>Update a post</h2>
            <Row className={classNames("mx-auto", "mt-5")}>
                <Col md={{span: 4, offset: 4}} className="text-center">
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="updatePostFormPostSelector">
                            <Form.Control as="select" onChange={(event) => onSelect(event.target.value)} value={selectedPost}>
                                <option key={DEFAULT_CHOICE_VALUE} value={DEFAULT_CHOICE_VALUE}>
                                    Select a post to update
                                </option>
                                {posts.map((post) =>
                                    <option key={post.id} value={post.id}>{post.id}&nbsp;-&nbsp;{post.title}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="updatePostTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" onChange={(event) => setTitle(event.target.value)} value={title}/>
                        </Form.Group>
                        <Form.Group controlId="updatePostBody">
                            <Form.Label>Body</Form.Label>
                            <Form.Control as="textarea" onChange={(event) => setBody(event.target.value)} value={body}/>
                        </Form.Group>
                        <Button variant="outline-primary" type="submit" className="mt-2" id="updatePostButton">
                            Update post
                        </Button>
                    </Form>
                </Col>
            </Row>
            {error !== undefined && <ErrorMessage message={error} id="updatePostError" />}
            {success !== undefined && <SuccessMessage message={success} id="updatePostSuccess" />}
        </Container>
    );
};

export default UpdatePost;
