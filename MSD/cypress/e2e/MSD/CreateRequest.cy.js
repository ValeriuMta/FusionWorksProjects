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

      //click on create request
      cy.get('a.MuiMenuItem-root').contains("Create Request").click()

      //click on create
      cy.get('a.MuiButton-root').contains("Create").click()

      //fill all the inputs
      const name1 = makeName(5)
      cy.get('#orderId').type(name1)
      cy.get('#date').type("2024-02-28")
      cy.get('#totalSum').type("211")
      cy.get('#customer\\.firstName').type("TEsting")
      cy.get('#customer\\.lastName').type("Mta")
      cy.get('#customer\\.phoneNumber').type(+37390909090)
      cy.get('div.MuiFilledInput-root').find('button.MuiButtonBase-root').click()
      cy.get('#restaurantId-option-0').click()
      cy.get('#deliveryAddress\\.street').type("3")
      cy.get('#deliveryAddress\\.streetNumber').type("22")
      cy.get('#deliveryAddress\\.locality').type(name1)
      cy.get('#deliveryAddress\\.area').type(name1)
      cy.get('#deliveryAddress\\.country').type(name1)
      cy.get('#deliveryAddress\\.buildingNumber').type(name1)
      cy.get('#deliveryAddress\\.intercom').type(name1)
      cy.get('#deliveryAddress\\.entrance').type(name1)
      cy.get('#deliveryAddress\\.floor').type(name1)
      cy.get('#deliveryAddress\\.apartment').type(name1)
      cy.get('#deliveryAddress\\.extraInfo').type(name1)
      cy.get('#deliveryAddress\\.formattedValue').type(name1)
      cy.get('#deliveryAddress\\.geo\\.lat').type("100")
      cy.get('#deliveryAddress\\.geo\\.lng').type("200")
      cy.get('#paymentMethod').click()
      cy.contains('li.MuiMenuItem-root',"CREDIT CARD").click()
      cy.get('#paymentStatus').click()
      cy.get('ul.MuiList-root').contains('li.MuiMenuItem-root',"SUCCESS").click()
      cy.get('button.MuiButton-root').contains("Add").click()
      cy.get('#products\\.0\\.id').type(name1)
      cy.get('#products\\.0\\.name').type(name1)
      cy.get('#products\\.0\\.totalPrice').type("100")
      cy.get('#products\\.0\\.basePrice').type("50")
      cy.get('#products\\.0\\.quantity').type("5")
      cy.get('button.MuiButton-root').contains("Save").click()






    
    })