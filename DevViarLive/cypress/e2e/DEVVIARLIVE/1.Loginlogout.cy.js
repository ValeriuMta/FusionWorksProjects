import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"
import {mainUrl} from "../../../constants/constants.js"
it('Testing login/logout', function() {

  IgnoreUncaughtException()

    cy.visit(mainUrl)

    cy.get("div.d-inline-block").click()



    
  
    // cy.get('#\\31 -email').type('dgorea@fusionworks.md')

    // cy.get('#\\31 -password').type('8JODH50MgY')

    // cy.get('#\\31 -submit').click()

    // cy.get('.Avatar_avatar__ntqyg').click()

    // cy.get(':nth-child(2) > .Dropdown_dropdown-list__item__UmqoU').click()
 
})