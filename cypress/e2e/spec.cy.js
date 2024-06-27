describe('Dummy website home page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it('h1 contains the correct text', () => {
    cy.get("h1").should("exist").contains("My Dummy Website");
  });
  it('check to make sure list is correct', () => {
    cy.get("ul").should("exist").contains("Google Link");
    cy.get("ul").should("exist").contains("Bing Link");
    cy.get("ul").should("exist").contains("Duckduckgo Link");
    cy.get("ul").should("exist").contains("Goes Nowhere");

  });
  it('test button change', () => {
    cy.get('.btn-primary').should("exist").contains("Clicking this button will change the text").click();
    cy.get('#testParagraph').should("exist").contains("THIS IS CHANGED");
    cy.get('.box-1 > button').should("exist").contains("Press me").click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('I hate JavaScript');
    });
  });
  it('test second button', () => {
    cy.get('.btn-2').should("exist").contains("Press me!!!").click()
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('You hate javascript too!');
    });
  })
})