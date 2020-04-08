# simple-frontend-app - A simple React web application

The application can be run on Gitpod: [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Gystark/simple-frontend-app/tree/master)

## Installation instructions
1. Navigate to the `app` directory that contains the application
2. Run `yarn install --frozen-lockfile` or `npm install` there

## Commands
Once the application has been installed, it provides the following commands that can be run using 'yarn run <command>' or 'npm run <command>':
* 'start': Starts the GUI and backend
* `start:gitpod`: Starts the GUI and backend, for use when running on Gitpod
* `test`: Runs all Cypress tests for the application, running the GUI and backend while doing so
* `test:coverage`: Runs the `test` command and requires that its coverage passes the thresholds set in `package.json`
* `test:open`: Opens the Cypress Test Runner GUI and starts the GUI and backend
* `coverage`: Displays test coverage metrics based on the test coverage data collected during the last test run
