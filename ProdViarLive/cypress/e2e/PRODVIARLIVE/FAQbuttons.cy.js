import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"


//jos am creat functie pentru a selecta de mai multe ori acelasi buton
function  FAQ(id){
  cy.get(`:nth-child(${id}) > .FAQ_faq__item-title__b0Bio`).click()
  cy.wait(2000)
}


it('Testing FAQbuttons', function() {
  
  IgnoreUncaughtException()
  
    cy.visit('https://viar.live/')

    cy.get('.FAQ_faq__c_WXN').scrollIntoView().should('be.visible') 
    

    FAQ(1)
    FAQ(1)
    FAQ(2)
    FAQ(2)
    FAQ(3)
    FAQ(3)
    FAQ(4)
    FAQ(4)
    FAQ(5)
    FAQ(5)
    FAQ(6)
    FAQ(6)
    FAQ(7)
    FAQ(7)
    FAQ(8)
    FAQ(8)
})

