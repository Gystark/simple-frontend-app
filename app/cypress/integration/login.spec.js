describe("Login", () => {
    it("Shows error when an incorrect password is entered", () => {
        cy.mockLoginRoute(401);

        cy.visit("/");

        cy.get('#loginFormUsername').type("test_username");
        cy.get("#loginFormPassword").type("password");
        cy.get("#loginButton").click();

        cy.wait("@loginRoute");

        cy.get("#loginError")
            .should("be.visible")
            .should("have.text", "");

        cy.get("@loginRoute.all").should("have.length", 1);
    });
});