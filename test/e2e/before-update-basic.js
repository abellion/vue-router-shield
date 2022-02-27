it(`doesn't call the middlewares when entering the route`, () => {
  cy.visit('apps/before-update-basic/foo/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 0)
})

it(`calls the middlewares when the route updates`, () => {
  cy.visit('apps/before-update-basic/foo/bar')

  cy
    .get('.cy-target-foo-baz-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy
    .get('.cy-target-foo-bar-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)
})
