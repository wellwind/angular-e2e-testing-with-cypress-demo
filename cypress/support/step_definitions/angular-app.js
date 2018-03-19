given('I go to the first page', () => {
  cy.visit('/');
})

then('There should be a header named {string}', (title) => {
  cy.get('app-root h1').contains(title);
})
