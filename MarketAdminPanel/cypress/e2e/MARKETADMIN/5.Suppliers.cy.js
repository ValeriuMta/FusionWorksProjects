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
    


})