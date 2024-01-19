import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"
///<reference types="cypress" />

function makeNumber(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

function makeName(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  
  
  it ('Couriers Creation', function() {
    IgnoreUncaughtException()
      cy.visit('https://admin.msd.dely.io/login')
      
      //login
      cy.get('#mui-1').type("msdmanager@dely.io")
      cy.get('#mui-2').type("12345678")
      cy.get('button.MuiButton-root').click()

      //choose organization
      cy.get('button.MuiButtonBase-root').contains("Test MD").click()

      //click on Couriers
      cy.get('a.MuiMenuItem-root').contains("Couriers").click()

      //Click on create
      cy.get('a.MuiButton-root').contains("Create").click()


      const number = makeNumber(8)
      cy.get('#phone').type('+373'+number)



      const name1 = makeName(5)  
      cy.get('#firstName').type(name1)
      cy.get('#lastName').type(name1)

      //SAVE
      cy.get('div.RaToolbar-defaultToolbar').find('button.MuiButton-root').click()

      







    
    })