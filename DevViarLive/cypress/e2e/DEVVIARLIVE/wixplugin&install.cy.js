import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing INSTALLbluebutton&WIXPLUGIN', function() {

  IgnoreUncaughtException()

    cy.visit('https://test.viar.live/')



    cy.get(`div[class='Header_nav-actions__fGRKS'] li:nth-child(3)`).children().should('have.attr','href', 'https://www.wix.com/app-market/virtual-tours')


    cy.get('.Install_install___bt5z').scrollIntoView().should('be.visible') 
    cy.wait(3000)

    cy.get(`.Button_button__LjnpS.Button_install__lA85h.Button_blue__UBUiW.Button_glow__8k1WA`).children().should('have.attr','href', 'https://www.wix.com/app-market/virtual-tours')



})

