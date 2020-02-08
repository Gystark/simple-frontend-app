import React from "react";
import classNames from "classnames";
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {login} from "../api";
import {useHistory, useLocation} from "react-router-dom";
import {HOME_ROUTE} from "../routes";
import {extractServerError} from "../common";
import ErrorMessage from "./ErrorMessage";

const Login = () => {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(undefined);

    const history = useHistory();
    const location = useLocation();

    const onSubmit = (event) => {
        event.preventDefault();

        login(username, password).then((res) => {
            localStorage.setItem("authToken", res.data.token);
            history.push(location.state ? location.state.from : HOME_ROUTE);
        }).catch((err) => {
            setError(extractServerError());
        });
    };

    return (
        <div className="vertical-center">
            <Container fluid onSubmit={onSubmit}>
                <h1 className="text-center">Simple Frontend App</h1>
                <Row className={classNames("mx-auto", "mt-5")}>
                    <Col md={{span: 6, offset: 3}} className="text-center">
                        <Form>
                            <Form.Group controlId="loginFormUsername" className="row">
                                <Form.Label
                                    className={classNames("col-md-2", "offset-md-3", "col-form-label")}>Username</Form.Label>
                                <Col md={4}>
                                    <Form.Control type="text" placeholder="Enter your username" required onChange={(e) => setUsername(e.target.value)}/>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="loginFormPassword" className="row">
                                <Form.Label
                                    className={classNames("col-md-2", "offset-md-3", "col-form-label")}>Password</Form.Label>
                                <Col md={4}>
                                    <Form.Control type="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}/>
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-2">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                {error !== undefined && <ErrorMessage message={error} />}
                <Row className={classNames("mx-auto", "mt-4")}>
                    <Col md={{span: 6, offset: 3}} className="text-center">
                        <p className="text-muted">Login using <strong>test_user</strong> as the username and <strong>test_password</strong> as the password.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
