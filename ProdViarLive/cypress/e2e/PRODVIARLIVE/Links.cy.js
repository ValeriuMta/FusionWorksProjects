import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing Links', function() {

  IgnoreUncaughtException()

    cy.visit('https://viar.live/')

    cy.get('.Footer_footer__BH5s_').scrollIntoView().should('be.visible') // scroll 

    cy.get('.Footer_footer-links__list__lBT6e > :nth-child(1) > a').click() //about us
    
    cy.wait(5000)

    cy.get('.Footer_footer-links__list__lBT6e > :nth-child(2) > a').click() // privacy policy


})
