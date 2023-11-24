import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing connection with a wrong email', function() {

  IgnoreUncaughtException()

    cy.visit('https://test.viar.live/')

    cy.get('.Header_nav-actions__buttons___q7PM > :nth-child(1)').click()
    cy.wait(2000)

    cy.get('.auth0-lock-alternative-link').click()
    cy.wait(2000)

    cy.get('#\\31 -email').type('vmereuta@fusionworks.md')

    cy.get('.auth0-label-submit').click()
    

    
})