import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"
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
    IgnoreUncaughtException()
      cy.visit('https://admin.msd.dely.io/login')
      
      //login
      cy.get('#mui-1').type("msdmanager@dely.io")
      cy.get('#mui-2').type("12345678")
      cy.get('button.MuiButton-root').click()

      //choose organization
      cy.get('button.MuiButtonBase-root').contains("Test MD").click()





    
    })