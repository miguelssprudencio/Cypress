describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-toggle').click()
    cy.get('.dropdown-menu > :nth-child(2) > a').click()
    cy.get('h1').should('contain', 'Traversal')
  })
})