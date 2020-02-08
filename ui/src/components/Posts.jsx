import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getAllPosts} from "../api";
import {extractServerError} from "../common";
import ErrorMessage from "./ErrorMessage";
import moment from "moment";
import classNames from "classnames";

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    const [error, setError] = React.useState(undefined);
    const [fetched, setFetched] = React.useState(false);

    React.useEffect(() => {
        getAllPosts().then((res) => {
            setPosts(res.data);
            setFetched(true);
        }).catch((err) => {
            setError(extractServerError());
            setFetched(true);
        });
    }, [fetched]);

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    {posts.map((post) =>
                        <div key={post.id}>
                            <Row key={`${post.id}-1`}>
                                <Col className="col-md-auto">{post.id}</Col>
                                <Col className="col-md-auto">{post.title}</Col>
                                <Col className="col-md-auto">{moment(post.postedAt).format("lll")}</Col>
                            </Row>
                            <Row key={`${post.id}-2`} className={classNames("mb-5", "mt-2", "text-justify")}>
                                <Col>{post.body}</Col>
                            </Row>
                        </div>)}
                </Col>
            </Row>
            {error !== undefined && <ErrorMessage message={error}/>}
        </Container>
    );
};

export default Posts;
