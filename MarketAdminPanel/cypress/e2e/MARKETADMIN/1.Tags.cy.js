///<reference types="cypress" />
// Tag Creation on admin panel 

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


it ('Tag Creation', function() {

cy.visit('https://market-admin.stg.dely.io/')

//login
cy.get('#mui-6').type('superadmin@ifood.md')
cy.get('#mui-7').type('12345678')
cy.get('.MuiButton-root').click()


//TAGS creation
cy.contains('div.MuiButtonBase-root', "CMS").next().find("a.MuiMenuItem-root").contains("Tags").click()


//click on create
cy.get('a.MuiButton-root').click()


const name = makeid(5)
cy.get('#name').type(name)

for ( let i = 0; i < 3; i++ ){
cy.get(`#translations\\[label_${i}\\]`).type(name)}

cy.get('#slug').type(name)
cy.get('button[aria-label="Save"]').click()

})

