import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getPosts} from "../api";
import {extractServerError} from "../common";
import ErrorMessage from "./ErrorMessage";
import moment from "moment";
import classNames from "classnames";
import {ButtonGroup, ButtonToolbar, Dropdown} from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const SORT_BY_ID = {value: "id", display: "ID"};
const SORT_BY_TITLE = {value: "title", display: "Title"};
const SORT_BY_DATE = {value: "postedAt", display: "Post date"};
const SORT_OPTIONS = [SORT_BY_ID, SORT_BY_TITLE, SORT_BY_DATE];

const ORDER_BY_ASC = {value: "asc", display: "Ascending"};
const ORDER_BY_DESC = {value: "desc", display: "Descending"};
const ORDER_OPTIONS = [ORDER_BY_ASC, ORDER_BY_DESC];

const DEFAULT_SORT_BY = SORT_BY_ID;
const DEFAULT_ORDER_BY = ORDER_BY_ASC;
const DEFAULT_SEARCH = undefined;

const Posts = () => {
    const [posts, setPosts] = React.useState([]);
    const [error, setError] = React.useState(undefined);

    const [sortBy, setSortBy] = React.useState(DEFAULT_SORT_BY);
    const [orderBy, setOrderBy] = React.useState(DEFAULT_ORDER_BY);
    const [search, setSearch] = React.useState(DEFAULT_SEARCH);

    React.useEffect(() => {
        getPosts(sortBy.value, orderBy.value, search).then((res) => {
            setPosts(res.data);
        }).catch((err) => {
            setError(extractServerError());
        });
    }, [sortBy, orderBy, search]);

    const findOptionByValue = (value, options) => {
        return options.find((o) => o.value === value);
    };

    const resetDefaults = () => {
        setSortBy(DEFAULT_SORT_BY);
        setOrderBy(DEFAULT_ORDER_BY);
        setSearch(DEFAULT_SEARCH);
    };

    return (
        <Container className="mt-5">
            <Row className="mb-5">
                <Col md={{span: 8, offset: 0}} className="mx-auto">
                    <ButtonToolbar>
                        <ButtonGroup>
                            <DropdownButton as={ButtonGroup} title={`Sort by ${sortBy.display}`} id="sort-posts-button"
                                            onSelect={(eventKey, _) => setSortBy(findOptionByValue(eventKey, SORT_OPTIONS))}
                                            className="mr-3">
                                {SORT_OPTIONS.map((option) =>
                                    <Dropdown.Item eventKey={option.value} active={option.value === sortBy.value}
                                                   key={option.value}>
                                        {option.display}
                                    </Dropdown.Item>
                                )}
                            </DropdownButton>
                            <DropdownButton as={ButtonGroup} title={`Order: ${orderBy.display}`}
                                            onSelect={(eventKey, _) => setOrderBy(findOptionByValue(eventKey, ORDER_OPTIONS))}
                                            id="order-posts-button" className="mr-3">
                                {ORDER_OPTIONS.map((option) =>
                                    <Dropdown.Item eventKey={option.value} active={option.value === orderBy.value}
                                                   key={option.value}>
                                        {option.display}
                                    </Dropdown.Item>
                                )}
                            </DropdownButton>
                            <InputGroup className="mr-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text>Search:&nbsp;</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl type="text" placeholder={search || "Search text" }
                                             onChange={(event) => setSearch(event.target.value)} />
                            </InputGroup>
                            <Button variant="outline-danger" onClick={() => resetDefaults()}>Reset</Button>
                          </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>
            <Row>
                <Col md={{span: 8, offset: 0}} className="mx-auto">
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
