// Based on https://github.com/typicode/json-server

const jsonServer = require('json-server');
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const VALID_AUTH_TOKEN = "valid-auth-token";
const UNAUTHORISED_ROUTES = ["/login", "/swagger"];

function allowUnauthorised(req) {
    return UNAUTHORISED_ROUTES.includes(req.path)
}

function isAuthorized(req) {
    const authHeader = req.header("Authorisation");
    if (authHeader !== undefined) {
        if (authHeader === VALID_AUTH_TOKEN) {
            return true;
        }
    }
    return false;
}

server.use(middlewares);
server.use((req, res, next) => {
    if (allowUnauthorised(req) || isAuthorized(req)) {
        next();
    } else {
        res.status(401).json({"message": "Unauthorised"});
    }
});

server.use(jsonServer.bodyParser);
server.post("/login", (req, res) => {
    if (req.body.username === "test_user" && req.body.password === "test_password") {
        res.json({"token": VALID_AUTH_TOKEN});
    } else {
        res.status(401).json({"message": "Incorrect username or password"})
    }
});

server.get("/swagger", (_, res) => {
    res.sendFile(path.join(__dirname, "swagger.json"));
});

server.use(router);

server.listen(3001, () => {
    console.log('Listening...')
});
