///<reference types="cypress" />

function makeid(length) {
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



it ('Category Creation', function() {

    cy.visit('https://market-admin.stg.dely.io/')
    
    //login
    cy.get('#mui-6').type('superadmin@ifood.md')
    cy.get('#mui-7').type('12345678')
    cy.get('.MuiButton-root').click()

    
    cy.contains('Categories').find("div.MuiListItemIcon-root").click()
    cy.get('a.MuiButton-root ').click()

    //Create 
    const name = makeid(5) 
    for ( let i=0; i<2; i++) {
      cy.get(`#translations\\[name_${i}\\]`).type(name)}
  
    cy.get('#rank').type('2')
    cy.get('.MuiButton-root').next().find('')

 


})
