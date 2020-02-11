import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import {
    HOME_ROUTE,
    POSTS_ROUTE,
    LOGIN_ROUTE,
    CREATE_POST_ROUTE,
    DELETE_POST_ROUTE,
    UPDATE_POST_ROUTE, LOGOUT_ROUTE
} from "./routes";
import Posts from "./components/Posts";
import NavMenu from "./components/NavMenu";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import DeletePost from "./components/DeletePost";
import UpdatePost from "./components/UpdatePost";
import Logout from "./components/Logout";

function App() {
    return (
        <React.StrictMode>
            <Router>
                <Switch>
                    <Route exact path={LOGIN_ROUTE}>
                        <Login/>
                    </Route>
                    <ProtectedRoute exact path={HOME_ROUTE}>
                        <NavMenu/>
                        <Home/>
                    </ProtectedRoute>
                    <ProtectedRoute path={POSTS_ROUTE}>
                        <NavMenu/>
                        <Posts/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path={CREATE_POST_ROUTE}>
                        <NavMenu/>
                        <CreatePost/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path={UPDATE_POST_ROUTE}>
                        <NavMenu/>
                        <UpdatePost/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path={DELETE_POST_ROUTE}>
                        <NavMenu/>
                        <DeletePost/>
                    </ProtectedRoute>
                    <ProtectedRoute exact path={LOGOUT_ROUTE}>
                        <NavMenu/>
                        <Logout/>
                    </ProtectedRoute>
                </Switch>
            </Router>
        </React.StrictMode>
    );
}

export default App;
