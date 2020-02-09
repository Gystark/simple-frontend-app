// Based on https://reacttraining.com/react-router/web/example/auth-workflow
import React from "react";
import {Redirect, Route} from "react-router-dom";
import {LOGIN_ROUTE} from "../routes";
import {AUTH_TOKEN_KEY} from "../common";

const ProtectedRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                localStorage.getItem(AUTH_TOKEN_KEY) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: LOGIN_ROUTE,
                            state: {from: location}
                        }}
                    />
                )
            }
        />
    );
};

export default ProtectedRoute;
