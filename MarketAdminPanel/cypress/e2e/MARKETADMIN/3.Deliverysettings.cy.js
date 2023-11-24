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


    cy.get('[href="/deliverySettings"]').click()
    cy.get('a.MuiButton-root').click()
    
    //Create 1 courier
    const name1 = makeName(5)
    cy.get('#name').type(name1)
    cy.get('#basePrice').type('25')
    cy.get('#settingType').click()
    cy.get('[data-value="COURIER"]').click()
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()

    cy.wait(1500)

    cy.get('[href="/deliverySettings"]').click()
    cy.get('a.MuiButton-root').click()
    
    //Create 2 client
    const name = makeName(5)
    cy.get('#name').type(name)
    cy.get('#basePrice').type('25')
    cy.get('#settingType').click()
    cy.get('[data-value="CLIENT"]').click()
    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()

    cy.wait(1500)

    cy.get('[href="/deliverySettings"]').click()
    cy.get('a.MuiButton-root').click()
    


    //Create 1.1 courier with options 
    const name2 = makeName(5)
    cy.get('#name').type(name2)
    cy.get('#basePrice').type('25')
    cy.get('#basePriceEnabled').click()
    cy.get('#orderDistanceEnabled').click()
    cy.get("button[class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root button-add button-add-orderDistanceRanges css-16zittn']").click()

    
    //Distance
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type(1)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type(10)
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)').type(25)

    //Peak hours
    cy.get('#peakHoursEnabled').click()
    cy.get("button[class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root button-add button-add-peakHours css-16zittn']").click()
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)').type(13)


    //Order price modifiers
    cy.get('#orderPriceEnabled').click()
    cy.get("button[class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root button-add button-add-orderPriceRanges css-16zittn']").click()
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type('5')
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type('10')
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)').type('15')

    cy.get('#settingType').click()
    cy.get('[data-value="CLIENT"]').click()

    cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()


     //Order price modifiers 2
     cy.get('a.MuiButton-root').click()
     const name3 = makeName(5)
     cy.get('#name').type(name3)
     cy.get('#basePrice').type('25')
     cy.get('#basePriceEnabled').click()
     cy.get('#orderDistanceEnabled').click()
     cy.get('#orderPriceEnabled').click()

     cy.get("button[class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButtonBase-root button-add button-add-orderPriceRanges css-16zittn']").click()
     cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').type('5')
     cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)').type('10')
     cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > section:nth-child(2) > div:nth-child(3) > div:nth-child(2) > input:nth-child(1)').type('15')
     
     cy.get('#settingType').click()
     cy.get('[data-value="COURIER"]').click()
     cy.get('.RaToolbar-defaultToolbar > .MuiButton-root').click()
     
    })