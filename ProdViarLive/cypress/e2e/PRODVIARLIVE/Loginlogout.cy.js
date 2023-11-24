import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing login/logout', function() {

  IgnoreUncaughtException()

    cy.visit('https://viar.live/')

    cy.get("div[class='Header_nav-actions__fGRKS'] button:nth-child(1)").click()
  
    cy.get('#\\31 -email').type('dgorea@fusionworks.md')

    cy.get('#\\31 -password').type('8JODH50MgY')

    cy.get('#\\31 -submit').click()

    cy.get('.Avatar_avatar__ntqyg').click()

    cy.get(':nth-child(6) > .Dropdown_dropdown-list__item__UmqoU').click()

    cy.get('.Header_nav-actions__buttons___q7PM > :nth-child(2)').click()

    cy.get('.auth0-lock-tabs > :nth-child(1) > a').click()
    
    

})