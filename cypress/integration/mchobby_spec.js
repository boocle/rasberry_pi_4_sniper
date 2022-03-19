describe('Mchobby', () => {
  beforeEach(() => {
    cy.visitWithIgnoringUncaughtException('https://shop.mchobby.be/fr/raspberry-pi-4/1858-raspberry-pi-4-8-go-de-ram-dispo-en-stock--3232100018587.html');
  });

  it('should diplay the right product title', () => {
    cy.checkPageTitle('h1', 'Raspberry Pi 4 - 8 Go');
  });

  it('should diplay the product as stock', () => {
    cy.checkProductAsStock('#availability_value.label-danger');
  });
});
