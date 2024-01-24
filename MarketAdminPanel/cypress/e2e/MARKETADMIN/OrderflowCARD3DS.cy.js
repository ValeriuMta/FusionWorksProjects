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
cy.get('.ng-untouched').find('div.payment-items').eq(1).click()

//check box
cy.get('div.terms-container').find('input[type = "checkbox"]').check({ force: true })


cy.get('div.margin-horizontal').find('button[type = "undefined"]').click()
cy.wait(1000)
cy.get('div.margin-horizontal').find('button[type = "undefined"]').click()
cy.wait(1500)
  
cy.origin("https://stripe.com/sources/test_source_3ds?livemode=false&type=three_d_secure&pass_through=&return_url=https%3A%2F%2Fhooks.stripe.com%2Fthree_d_secure%2Fredirect_complete%2Facct_1NfgN3In9mRh1xUY%2Ftdsrc_1Oc8ccIn9mRh1xUYkFcIhvCf&source_slug=CBsaFwoVYWNjdF8xTmZnTjNJbjltUmgxeFVZKObqxK0GMgb2I3hNA0g6LdgJ-DzcF7bQpL3_g_9CfqrAvTK42JLD0Wb0evpzcnJyBsDKHUQ1tPBYdtg_9A&amount=10600&currency=dkk&usage=single_use",() =>{
  cy.get('#test-source-authorize-3ds').contains("Complete authentication").click()
  
})  

cy.wait(1500)
cy.get('app-button.col').find('button[type = "undefined"]').click()



})