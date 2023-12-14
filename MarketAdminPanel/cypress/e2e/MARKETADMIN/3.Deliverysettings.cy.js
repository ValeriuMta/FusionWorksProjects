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


    cy.get('div.MuiAccordionDetails-root').contains('a.MuiMenuItem-root',"Delivery Settings").click()
    cy.get('div.MuiToolbar-root').contains('a.MuiButton-root',"Create").click()
    
    //Create 1 courier
    const name1 = makeName(5)
    cy.get('#name').type(name1)
    cy.get('#basePrice').type('25')
    cy.get('#basePriceEnabled').click()

    //Distance
    cy.get('#orderDistanceEnabled').click()
    cy.get('span.RaSimpleFormIterator-action').eq(0).contains('button.MuiButton-root',"Add").click()
    cy.get('#orderDistanceRanges\\.0\\.from').type(10)
    cy.get('#orderDistanceRanges\\.0\\.to').type(20)
    cy.get('#orderDistanceRanges\\.0\\.modifier').type(5)

    //Peak hours
    cy.get('#peakHoursEnabled').click()
    cy.get('span.RaSimpleFormIterator-action').eq(2).contains('button.MuiButton-root',"Add").click()
    cy.get('#peakHours\\.0\\.modifier').type(12)

    //Order price modifiers
    cy.get('#orderPriceEnabled').click()
    cy.get('span.RaSimpleFormIterator-action').eq(4).contains('button.MuiButton-root',"Add").click()
    cy.get('#orderPriceRanges\\.0\\.from').type(10)
    cy.get('#orderPriceRanges\\.0\\.to').type(12)
    cy.get('#orderPriceRanges\\.0\\.modifier').type(15)

    cy.get('#settingType').click()
    cy.get('li.MuiMenuItem-root').contains("Courier").click()

    cy.get('button.MuiButton-root').contains("Save").click()


    // cy.get('#settingType').click()
    // cy.get('ul.MuiList-root').contains('li.MuiMenuItem-root',"Courier").click()
    // cy.get('div.RaToolbar-defaultToolbar').contains('.MuiButton-root',"Save").click()

    








  })
