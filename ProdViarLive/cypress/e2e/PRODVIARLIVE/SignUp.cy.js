import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing signup', function() {

  IgnoreUncaughtException()

    cy.visit('https://viar.live/')

    cy.get('.Header_nav-actions__buttons___q7PM > :nth-child(2)').click()
  
    cy.get('#\\31 -email').type(' milionarddd@mail.ru')

    cy.get('#\\31 -password').type(' 123456789 ')

    cy.get('#\\31 -submit').click()

    cy.get('.Avatar_avatar__ntqyg').click()

    cy.get(':nth-child(6) > .Dropdown_dropdown-list__item__UmqoU').click()

    
    
    

})