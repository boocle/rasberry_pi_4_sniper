describe('Reichelt', () => {
  beforeEach(() => {
    cy.visitWithIgnoringUncaughtException('https://www.reichelt.com/fr/fr/raspberry-pi-4-b-4x-1-5-ghz-8-gb-ram-wlan-bt-rasp-pi-4-b-8gb-p276923.html');
  });

  it('should diplay the right product title', () => {
    cy.checkPageTitle('h2', 'RASP PI 4 B 8GB');
  });

  it('should diplay the product as stock', () => {
    cy.checkProductAsStock('#av_inbasket_message');
  });
});
