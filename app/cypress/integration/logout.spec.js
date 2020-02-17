describe("Logout", () => {
    beforeEach(() => {
        cy.login();
        cy.get('[href="/logout"]').click();
    });

    it("Shows logout and cancel buttons", () => {
        cy.get("#logoutContainer").should("be.visible");
        cy.get("[data-test=logoutButton]")
            .should("be.visible")
            .should("have.text", "Log out");
        cy.get("[data-test=cancelLogoutButton]")
            .should("be.visible")
            .should("have.text", "Cancel");
    });
});
