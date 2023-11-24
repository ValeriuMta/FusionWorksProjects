///<reference types="cypress" />

import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

//random cifre
const numbr= Math.floor(Math.random() * 900) + 100;
//random litere
const txtr = Math.random().toString(36).substring(2, 7);

it('Create reques', function() {
    IgnoreUncaughtException()
    cy.visit('https://admin.msd.dely.io/login')

    //login
    cy.get('#mui-1').type('msdmanager@dely.io')
    cy.get('#mui-2').type('12345678')

    cy.get('.MuiButton-root').click()

    //choose organisation 
    cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').click()
    

    //create-request
    cy.get('[href="/delivery/request-delivery"]').click()

    //+create
    cy.get("a[aria-label='Create']").click()


    //orderid
    cy.get('#orderId').type(numbr)
    
    
})