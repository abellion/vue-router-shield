it(`calls the guards only once even when a redirect occurs`, () => {
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

it(`doesn't call the guards again within the same route stack`, () => {
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

it(`calls the guards when moving out and then back in the route stack`, () => {
  cy.visit('apps/before-enter-basic/baz')

  cy
    .get('.cy-target-baz-qux-1-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard D')

  cy
    .get('.cy-target-bar-view')
    .click()
    .get('.cy-target-baz-view')
    .click()
    .get('.cy-target-baz-qux-1-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(1)
    .should('contain', 'Guard D')

  cy
    .get('.cy-target-bar-view')
    .click()
    .get('.cy-target-baz-view')
    .click()
    .get('.cy-target-baz-qux-2-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 3)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(2)
    .should('contain', 'Guard D')
})

it(`keeps calling the guards even when the navigation is aborted`, () => {
  cy.visit('apps/before-enter-basic/bar')

  cy
    .get('.cy-target-bar-baz-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 1)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(0)
    .should('contain', 'Guard C')

  cy
    .get('.cy-target-bar-baz-view')
    .click()

  cy.get('.cy-target-logs .cy-target-log')
    .should('have.length', 2)

  cy.get('.cy-target-logs .cy-target-log')
    .eq(1)
    .should('contain', 'Guard C')
})
