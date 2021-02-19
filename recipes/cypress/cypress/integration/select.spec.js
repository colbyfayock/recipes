describe("Select", () => {

  beforeEach(() => {
    cy.visit('/ingredients/select');
  })

  describe('Default', () => {

    it(`should be the first option without a default selected value`, function () {
      cy.get('#spices-default').should('have.value', 'chili-powder')
    });

    it(`should choose an item from a Select dropdown`, function () {
      const value = 'paprika';
      cy.get('#spices-default').select(value).should('have.value', value)
    });

  });

  describe('With Default Selected Value', () => {

    it(`should be the first option without a default selected value`, function () {
      cy.get('#spices-selected').should('have.value', 'ginger')
    });

  });

});