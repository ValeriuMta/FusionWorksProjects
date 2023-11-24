import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js"

it('Testing enterbluebutton', function() {

  IgnoreUncaughtException()

    cy.visit('https://test.viar.live/')

    cy.get('.Main_main-description__I5odB > div > .Button_button__LjnpS').click()

    cy.get('.auth0-lock-tabs > :nth-child(1) > a').click()

    cy.get('#\\31 -email').type('dgorea@fusionworks.md')

    cy.get('#\\31 -password').type('8JODH50MgY')

    cy.get('#\\31 -submit').click()

    cy.get('.Avatar_avatar__ntqyg').click()

    cy.get(':nth-child(6) > .Dropdown_dropdown-list__item__UmqoU').click()


})

