describe('Yadom', () => {
  beforeEach(() => {
    cy.visitWithIgnoringUncaughtException('https://yadom.fr/nouveau-raspberry-pi-4-modele-b-version-8gb.html');
  });

  it('should diplay the right product title', () => {
    cy.checkPageTitle('.page-title', 'Raspberry Pi 4 modèle B - Version 8Gb');
  });

  it('should diplay the product as stock', () => {
    cy.checkProductAsStock('.stock.unavailable');
  });
});
