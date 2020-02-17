import classNames from "classnames";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";
import {Row} from "react-bootstrap";
import React from "react";

const ErrorMessage = ({message, id}) => {
    return (
        <Row className={classNames("mx-auto", "mt-4")}>
            <Col md={{span: 4, offset: 4}} className="text-center">
                <Alert variant="danger" id={id}>{message}</Alert>
            </Col>
        </Row>
    );
};

export default ErrorMessage;
