it(`calls all middlewares within the stack`, () => {
  cy.visit('apps/before-each-basic/foo/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Middleware A')
    .next()
    .should('contain', 'Middleware B')
})

it(`calls again the first middleware`, () => {
  cy.visit('apps/before-each-basic/foo')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Middleware A')

  cy
    .get('.cy-target-foo-bar-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 3)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(1)
    .should('contain', 'Middleware A')
    .next()
    .should('contain', 'Middleware B')
})