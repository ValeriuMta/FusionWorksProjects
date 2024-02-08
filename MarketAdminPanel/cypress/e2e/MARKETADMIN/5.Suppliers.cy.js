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


it ('Suppliers Creation', function() {

    cy.visit('https://market-admin.stg.dely.io/')
    
    //login
    cy.get('#mui-6').type('superadmin@ifood.md')
    cy.get('#mui-7').type('12345678')
    cy.get('.MuiButton-root').click()

    //go to supplier tab
    cy.contains('a.MuiMenuItem-root',"Suppliers").click()

    //click on create
    cy.get('div.MuiToolbar-root').contains('a.MuiButton-root',"Create").click()

    //General subtab flow
    const name = makeName(5)
    cy.get('#slug').type(name)
    
    //name
    cy.get('#translations\\[name_0\\]').type(name)
    cy.get('#translations\\[name_1\\]').type(name)

    cy.get('#deliverySettingsId').click()


    cy.get('li.MuiMenuItem-root').contains("Standard Driver Price").click()

    //courier payout policy
    cy.get('#courierPayoutPolicyId').click()
    cy.get('li.MuiMenuItem-root').contains("Default payout policy").click()

    //status
    cy.get('#status').click()
    cy.get('li.MuiMenuItem-root').contains("OPEN").click()

    cy.get('#rank').type(1)

    cy.get('#launchDate').type("2024-01-21")

    //Branding

    cy.get(`#tabheader-1`).click()

    //Description
    cy.get('div.ml-1r').find('div.MuiFilledInput-root').eq(2).type(name)
    cy.get('div.ml-1r').find('div.MuiFilledInput-root').eq(3).type(name)

    //Highlight
    cy.get('div.ml-1r').find('div.MuiFilledInput-root').eq(4).type(name)
    cy.get('div.ml-1r').find('div.MuiFilledInput-root').eq(5).type(name)
    cy.get('#mui-component-select-tagIds').click()
    cy.get('li.MuiMenuItem-root').contains("Pasta").click()
    cy.wait(1000)
    cy.get('#tabheader-2').click()


    //Financial
    cy.get('#cvrNumber').type(name)
    // cy.get('#bankAccount')
    

    // cy.get('button.MuiButton-root').contains("Save").click()




})