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


it ('Delivery Settings Creation', function() {

    cy.visit('https://market-admin.stg.dely.io/')
    
    //login
    cy.get('#mui-6').type('superadmin@ifood.md')
    cy.get('#mui-7').type('12345678')
    cy.get('.MuiButton-root').click()


    
    cy.get('div.MuiAccordionDetails-root').contains("Courier Payout Policy").click()
    cy.get('a.MuiButton-root').contains("Create").click()

    //Name
    const name = makeName(5)
    cy.get('#name').type(name)

    //coefficient value
    for (let i = 0; i < 4; i++) {
      cy.get(`#courierPayoutSettings\\.${i}\\.coefficient`).type(5)
    }


    for (let i = 0; i < 4; i++){
    cy.get(`#courierPayoutSettings\\.${i}\\.deliverySettingId`).click()
      .get('ul.MuiList-root').contains('li.MuiMenuItem-root',"7RewI").click()
    }

    cy.get('button.MuiButton-root').contains("Save").click()
  


    })