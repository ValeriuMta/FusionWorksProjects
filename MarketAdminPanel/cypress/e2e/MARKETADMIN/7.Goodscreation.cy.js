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
    cy.get('tbody tr:nth-child(3)').click()
    cy.get('div[id="main-content"] a:nth-child(3)').click()
    cy.get('a[title="Add good"]').click()
    

    //Create good
    const name = makeName(5)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(name)
    cy.get('.css-1lxwves > :nth-child(1) > :nth-child(5)').type(name)

    //Description
    cy.get('div[class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root ra-input ra-input-translations[description_0] css-1xp199e"] div[class="MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-multiline css-owpmv7"]').type(name)
    cy.get('div[class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root ra-input ra-input-translations[description_1] css-1xp199e"] div[class="MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-multiline css-owpmv7"]').type(name)
    cy.get('div[class="MuiFormControl-root MuiFormControl-marginDense MuiFormControl-fullWidth MuiTextField-root ra-input ra-input-translations[description_2] css-1xp199e"] div[class="MuiFilledInput-root MuiFilledInput-underline MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-multiline css-owpmv7"]').type(name)
    cy.get(':nth-child(2) > :nth-child(5) > .MuiFormControl-root > .MuiFilledInput-root').type(name)

    //Price
    cy.get('#price').type(150)
    cy.get('#size').clear() 
    cy.get('.MuiFormControl-root.MuiFormControl-marginDense.MuiTextField-root.css-oec1wv').type(100)
    cy.get('.ra-input-categoryId > .MuiFormControl-root > .MuiFilledInput-root').click()
    cy.get('#categoryId-option-0').click()
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()


})