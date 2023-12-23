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

// cy.get('class.input-row').type()


})
