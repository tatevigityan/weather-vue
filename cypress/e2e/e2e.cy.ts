describe("Weather", () => {
  it("visits the app root url", () => {
    cy.visit("http://localhost:5173");
    cy.contains("h1", "Погодное приложение");
    cy.get("input").type("Moscow");
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="info-block"]').should("exist");
  });
});
