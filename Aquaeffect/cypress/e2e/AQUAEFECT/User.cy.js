// User Admin should be able to Create Edit Delete user roles 
import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"



it('User -> create ; edit ; delete ', function (){
    IgnoreUncaughtException()

    cy.visit('http://dev.aquaeffect.md/')
    cy.wait(2000)

    cy.get(':nth-child(1) > input').type('fwtest@fusionworks.md')
    cy.get('.password-input').type('123456789')
    cy.get('.form-submit-btn').click() //click on login
    
    cy.get('.css-vunk5k-MuiToolbar-root-RaListToolbar-root > .MuiToolbar-root > .MuiButtonBase-root').click()   // click on Create
    cy.get('#firstName').type('Tarlouze')   //  enter first name
    cy.get('#lastName').type('Douze')   //  enter second name
    cy.get('#phone').type('+37312345678')   //  enter phone number
    cy.get('#email').type('milionard@mail.ru')  //  enter email
    cy.get('#roleId').click()   //  click on role
    cy.get('[data-value="3"]').click()  //  choose a role
    cy.get('.RaToolbar-defaultToolbar > .MuiButtonBase-root').click() // click on SAVE
   


})