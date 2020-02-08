// Based on https://reacttraining.com/react-router/web/example/auth-workflow
import React from "react";
import {Redirect, Route} from "react-router-dom";
import {LOGIN_ROUTE} from "../routes";

const ProtectedRoute = ({children, ...rest}) => {
    return (
        <Route
            {...rest}
            render={({location}) =>
                localStorage.getItem("authToken") ? (
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
