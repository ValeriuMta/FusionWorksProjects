import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing Explore button', function() {

  IgnoreUncaughtException()

    cy.visit('https://test.viar.live/')
    
    cy.get('.Header_nav-actions__list__XAIKe > :nth-child(2)').click() //click on Explore button

    cy.get('.TourList_tours-list__gzol_ > :nth-child(1)').click() // select an 360 image    

    

})