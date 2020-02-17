Cypress.Commands.add("mockLoginRoute", (statusCode) => {
    cy.server();
    cy.route({
        method: 'POST',
        url: '/login',
        status: statusCode,
        response: statusCode === 200 ? "fixture:login" : {"message": "Incorrect username or password"},
    }).as("loginRoute");
});

Cypress.Commands.add("login", () => {
    cy.mockLoginRoute(200);

    cy.visit("/");

    cy.get('#loginFormUsername').type("test_user");
    cy.get("#loginFormPassword").type("test_password");
    cy.get("#loginButton").click();

    cy.wait("@loginRoute");
    cy.get("@loginRoute.all").should("have.length", 1);
});