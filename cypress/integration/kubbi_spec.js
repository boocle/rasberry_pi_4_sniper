describe('Kubii', () => {
  beforeEach(() => {
    cy.visitWithIgnoringUncaughtException('https://www.kubii.fr/cartes-raspberry-pi/2955-raspberry-pi-4-modele-b-8gb-3272496301535.html');
  });

  it('should diplay the right product title', () => {
    cy.checkPageTitle('h1', 'Raspberry Pi 4 modèle B - 8GB');
  });

  it('should diplay the product as stock', () => {
    cy.checkProductAsStock('#availability_value.label-danger');
  });
});
