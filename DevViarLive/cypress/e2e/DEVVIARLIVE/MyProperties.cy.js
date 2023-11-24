import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing login/logout', function() {

  IgnoreUncaughtException()

    cy.visit('https://test.viar.live/')

    cy.get("div[class='Header_nav-actions__fGRKS'] button:nth-child(1)").click()
  
    cy.get('#\\31 -email').type('vmereuta@fusionworks.md')

    cy.get('#\\31 -password').type('123456789')

    cy.get('#\\31 -submit').click()

    cy.get('.ProfileSidebar_active__7QXfX > .ProfileSidebar_dropdown-list__item-title__cU5gW').click()

    cy.get('.EmptyPageHeader_emptyPage-btn__c14Mw').click()

    cy.get(':nth-child(1) > .css-b62m3t-container > .css-13cymwt-control > .css-hlgwow > .css-19bb58m').click()

    

    
 
})