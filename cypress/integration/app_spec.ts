describe('app', () => {
  it('loads', () => {
    cy.visit('http://localhost:4200');
    cy.get('app-root h1').contains('Welcome to app!');
  });

  it('loads by root path', () => {
    cy.visit('/');
    cy.get('app-root h1').contains('Welcome to app!');
  });
});
