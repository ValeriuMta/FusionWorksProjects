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


    cy.get(':nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > .MuiMenuItem-root').click()
    cy.get('tbody tr:nth-child(1)').click()
    cy.get('div[id="main-content"] a:nth-child(2)').click()

    //Add adress
    cy.get('a[title="Add address"]').click()

    const name = makeName(5)
    cy.get('#name').type(name)
    cy.get('#notes').type(name)
    cy.get('#phoneNumber').type('+37379506155')
    cy.get('#externalId').type('5')


    //Checkbox
    cy.get(':nth-child(2) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
    cy.get(':nth-child(3) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
    cy.get(':nth-child(4) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
    cy.get(':nth-child(5) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
    cy.get(':nth-child(6) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
    cy.get(':nth-child(7) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()
    cy.get(':nth-child(8) > .MuiCheckbox-root > .PrivateSwitchBase-input').check()

    cy.get('#country').type(name)
    cy.get('#area').type(name)
    cy.get('#locality').type(name)
    cy.get('#street').type(name)
    cy.get('#house').type(name)
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()

    //Sync
    cy.get('tbody tr:nth-child(1) td:nth-child(1)').click()
    cy.get(':nth-child(4) > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiAccordion-region > .MuiAccordionDetails-root > .MuiMenuItem-root').click()
    cy.get(':nth-child(1) > :nth-child(13) > .MuiTypography-root > .MuiButton-root').click()
    


})