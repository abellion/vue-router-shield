it(`calls all the guards within the route stack`, () => {
  cy.visit('apps/before-each-basic/foo/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard A')
    .next()
    .should('contain', 'Guard B')
})

it(`calls the previous guards on route change`, () => {
  cy.visit('apps/before-each-basic/foo')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard A')

  cy
    .get('.cy-target-foo-bar-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 3)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(1)
    .should('contain', 'Guard A')
    .next()
    .should('contain', 'Guard B')
})
