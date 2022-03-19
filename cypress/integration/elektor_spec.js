describe('Elektor', () => {
  beforeEach(() => {
    cy.visit('https://www.elektor.fr/raspberry-pi-4-b-8-gb-ram');
  });

  it('should diplay the right product title', () => {
    cy.get('.product-page__title').contains('Raspberry Pi 4 B (8 Go de RAM)');
  });

  it('should diplay the product as stock', () => {
    cy.get('.stock--unavailable').should('not.exist');
  });
});
