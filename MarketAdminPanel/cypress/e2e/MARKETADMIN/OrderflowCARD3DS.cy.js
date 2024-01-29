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
cy.wait(1500)
cy.get('#suggest').type("Chisinau") 
cy.get('ul.p-menu-list').contains('a.p-menuitem-link',"Chișinău, Moldova").click()
cy.get('button.next-button').click()
cy.get('div.action-box').find('button').eq(1).click()

cy.get('#input-search-global').type("DEJ")
cy.get('div.restaurant-box').click()
cy.get('app-add-item-button.active').first().click()
cy.get('button.cart-dropdown-btn').click()
cy.get('button.primary').click()


//choose 3DS card
cy.wait(2000)
cy.get('.ng-untouched').find('div.payment-items').eq(1).click()
cy.wait(1500)

//check box
cy.get('div.terms-container').find('input[type = "checkbox"]').check({ force: true })


cy.get('div.margin-horizontal').find('button[type = "undefined"]').click()
cy.wait(1000)
cy.get('div.margin-horizontal').find('button[type = "undefined"]').click()

cy.wait(1500)

cy.origin('https://hooks.stripe.com/3d_secure_2/hosted', () => {
  // cy.visit('/3d_secure_2/hosted')
  cy.get('div.ButtonGroup').contains('#test-source-authorize-3ds',"Complete").click()
})

// cy.wait(1500)
// cy.get('app-button.col').find('button[type = "undefined"]').click()


})