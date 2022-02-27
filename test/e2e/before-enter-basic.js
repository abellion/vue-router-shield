it(`calls the middlewares only once even when a redirect occurs`, () => {
  cy.visit('apps/before-enter-basic/foo')

  cy.url()
    .should('contain', '/foo/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard A')
    .next()
    .should('contain', 'Guard B')
})

it(`doesn't call the middlewares again within the same route stack`, () => {
  cy.visit('apps/before-enter-basic/foo/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard A')
    .next()
    .should('contain', 'Guard B')

  cy
    .get('.cy-target-foo-baz-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)
})

it(`calls the middlewares when moving out and then back in the route stack`, () => {
  cy.visit('apps/before-enter-basic/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard B')

  cy
    .get('.cy-target-foo-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 3)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(1)
    .should('contain', 'Guard A')
    .next()
    .should('contain', 'Guard B')

  cy
    .get('.cy-target-bar-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 4)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(3)
    .should('contain', 'Guard B')

  cy
    .get('.cy-target-foo-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 6)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(4)
    .should('contain', 'Guard A')
    .next()
    .should('contain', 'Guard B')
})

it(`keeps calling the middlewares even when the navigation is aborted`, () => {
  cy.visit('apps/before-enter-basic/bar')

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard B')

  cy
    .get('.cy-target-bar-baz-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(1)
    .should('contain', 'Guard C')

  cy
    .get('.cy-target-bar-baz-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 3)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(2)
    .should('contain', 'Guard C')
})
