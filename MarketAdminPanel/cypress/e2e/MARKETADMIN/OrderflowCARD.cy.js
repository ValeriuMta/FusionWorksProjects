///<reference types="cypress" />

function makeName(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;

}
it ( 'Order flow payment with card', function (){

cy.visit('https://market.stg.dely.io/')

cy.get('div.user-button').click()
cy.get('div.input-row').type('valera1@gmail.com')
cy.get('.primary').click()
cy.wait(1000)
cy.get('div.input-row').type(10203040)
cy.wait(1000)
cy.get('.primary').click()

cy.get('div.address-button-content').click()
cy.get('#suggest').clear()
cy.get('#suggest').type("Chisinau") 
cy.get('a.p-menuitem-link').click()
// cy.get('#input-search-global').type("DEJ")
// cy.get('div.restaurant-box').click()
// cy.get('app-add-item-button.active').first().click()
// cy.get('button.cart-dropdown-btn').click()
// cy.get('button.primary').click()


// cy.get('class.input-row').type()


})