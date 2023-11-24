import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing ContactUsbuttons', function() {

  IgnoreUncaughtException()

    cy.visit('https://viar.live/')

    cy.get('.Footer_footer__BH5s_').scrollIntoView() // scroll to the price page
    cy.wait(3000)
    
    cy.get(`div[class='Footer_footer__BH5s_'] span:nth-child(1)`).children().should('have.attr','href', 'https://www.facebook.com/viar.live')
    cy.get(`div[class='Footer_footer__BH5s_'] span:nth-child(2)`).children().should('have.attr','href', 'https://www.linkedin.com/company/viar.live')
    cy.get(`div[class='Footer_footer__BH5s_'] span:nth-child(3)`).children().should('have.attr','href', 'https://twitter.com/ViarLive')
    cy.get(`div[class='Footer_footer__BH5s_'] span:nth-child(4)`).children().should('have.attr','href', 'https://www.youtube.com/@viarlive')
  

})
