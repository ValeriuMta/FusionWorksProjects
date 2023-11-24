import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing create virtual tours with ease', function() {

  IgnoreUncaughtException()

    cy.visit('https://test.viar.live/')

    cy.get('.Accordion_accordion__V82Q6').scrollIntoView().should('be.visible') 

    cy.get('.Accordion_accordion-item__Z_DC8.Accordion_active__liRZh').click()

    cy.wait(2000)

    cy.get('.Accordion_accordion-item__Z_DC8.Accordion_active__liRZh').click()

    cy.wait(2000)

    cy.get(`div[class='Accordion_accordion-content__Gr0as'] div:nth-child(3)`).click()


    
})

