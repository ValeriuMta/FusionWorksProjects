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


    cy.get('[href="/policy"]').click()
    cy.get('a.MuiButton-root').click()



    const name = makeName(5)
    cy.get('#name').type(name)

    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type(5)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type(10)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type(15)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type(20)

    //Dellivery setting
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').click()
    cy.get("div[id='menu-courierPayoutSettings.0.deliverySettingId'] li:nth-child(2)").click()

    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').click()
    cy.get("div[id='menu-courierPayoutSettings.1.deliverySettingId'] li:nth-child(2)").click() 

    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(3) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').click()
    cy.get("div[id='menu-courierPayoutSettings.2.deliverySettingId'] li:nth-child(2)").click()

    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1)').click()
    cy.get("div[id='menu-courierPayoutSettings.3.deliverySettingId'] li:nth-child(2)").click()

    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()





    })