export function visitWithIgnoringUncaughtException(url) {
  Cypress.on('uncaught:exception', () => false);
  cy.viewport(1920, 1080);
  cy.visit(url);
}

export function checkPageTitle(selector, contains) {
  cy.get(selector).contains(contains);
}

export function checkProductAsStock(selector) {
  cy.get(selector).should('not.exist');
}

Cypress.Commands.add('checkProductAsStock', checkProductAsStock);
Cypress.Commands.add('checkPageTitle', checkPageTitle);
Cypress.Commands.add('visitWithIgnoringUncaughtException', visitWithIgnoringUncaughtException);
