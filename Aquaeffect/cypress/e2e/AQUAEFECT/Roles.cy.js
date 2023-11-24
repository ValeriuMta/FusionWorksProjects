// User Admin should be able to Create Edit Delete user roles 
import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"



it('Roles flow', function (){
    IgnoreUncaughtException()

    cy.visit('http://dev.aquaeffect.md/')
    cy.wait(2000)

    cy.get(':nth-child(1) > input').type('fwtest@fusionworks.md')
    cy.get('.password-input').type('123456789')
    cy.get('.form-submit-btn').click() //click on login
    
    cy.get('[href="#/roles"]').click() // click on Roles in admin panel





})