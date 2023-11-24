import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing Explore button', function() {

  IgnoreUncaughtException()

    cy.visit('https://viar.live/')
    
    cy.get(':nth-child(1) > .Header_link__JjpDB').click() //click on Explore button

    cy.get('.TourList_tours-list__gzol_ > :nth-child(1)').click() // select an 360 image    

    

})