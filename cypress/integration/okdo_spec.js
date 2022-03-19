describe('Okdo', () => {
  beforeEach(() => {
    cy.visitWithIgnoringUncaughtException('https://www.okdo.com/fr/p/raspberry-pi-4-modele-b-8gb');
  });

  it('should diplay the right product title', () => {
    cy.checkPageTitle('.c-product__title', 'Raspberry Pi 4 MODELE B – 8GB');
  });

  it('should diplay the product as stock', () => {
    cy.checkProductAsStock('.out-of-stock');
  });
});
