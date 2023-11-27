import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"
import {mainUrl} from "../../../constants/constants.js"
it('Testing login/logout', function() {

  IgnoreUncaughtException()

    cy.visit(mainUrl)

    cy.get("div.d-inline-block").click()

    cy.url().should('not.include',"https://auth.viar.live/u/login?state=hKFo2SBfUktZbThpXzJlUFR2VDRWbWFJY29PbnVIUzBoQW5FRKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGlab0ZmZS1BUUpFYlF4Q0NmZHZBeXpwRDVJc0RzWEFFo2NpZNkgSTJNUHBWamE0Q05nQ2VROUVwWU1EVGdLS2Fyd21aZHM")
  
    // cy.get('#\\31 -email').type('dgorea@fusionworks.md')

    // cy.get('#\\31 -password').type('8JODH50MgY')

    // cy.get('#\\31 -submit').click()

    // cy.get('.Avatar_avatar__ntqyg').click()

    // cy.get(':nth-child(2) > .Dropdown_dropdown-list__item__UmqoU').click()
 
})