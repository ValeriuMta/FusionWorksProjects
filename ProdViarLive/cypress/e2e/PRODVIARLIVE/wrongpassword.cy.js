import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing connection with a wrong email', function() {

  IgnoreUncaughtException()

    cy.visit('https://viar.live/')

    cy.get("div[class='Header_nav-actions__fGRKS'] button:nth-child(1)").click()
  
    cy.get('#\\31 -email').type('dgorea@fusionworks.md')

    cy.get('#\\31 -password').type('123698741')

    cy.get('#\\31 -submit').click() 
    

})