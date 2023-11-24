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
    cy.get('a.MuiButton-root').click()

    //meta title
    const name = makeName(5)
    cy.get('#translations\\[metaTitle_0\\]').type(name)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)

    //meta description
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    
    //name
  
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)

    //description
    cy.get("div[class='MuiFormControl-root MuiFormControl-marginDense MuiTextField-root ra-input ra-input-translations[description_0] css-1gki5ws'] div[class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-multiline css-17kw3bt']").type(name)
    cy.get("div[class='MuiFormControl-root MuiFormControl-marginDense MuiTextField-root ra-input ra-input-translations[description_1] css-1gki5ws'] div[class='MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-multiline css-17kw3bt']").type(name)
    
    //highlitght
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    
    //courier payout policti
    cy.get('#courierPayoutSettings').click()
    cy.get('li:nth-child(2)').click()

    //date
    cy.get("#launchDate").click(248, 23)
    

    // //tags
    // cy.get("#mui-component-select-tagIds").click()
    // cy.get(".MuiMenuItem-root.MuiMenuItem-gutters.MuiButtonBase-root.css-1km1ehz[tabindex='0']").click()
    // cy.wait(3500)
    // cy.get('.css-1lxwves').click()
    

    // //supplier type
    // cy.get("#type").click()
    // cy.get("li:nth-child(2)").click()

    // //delivery settings 
    // cy.get("#deliverySettingsId").click()
    // cy.get("li:nth-child(2)").click()

    // cy.get("#underAgeAllowed").click()

    // cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(15) > span:nth-child(2) > span:nth-child(5)").click()

    // //rank
    // cy.get("#rank").clear()
    // cy.get("#rank").type(2)





})