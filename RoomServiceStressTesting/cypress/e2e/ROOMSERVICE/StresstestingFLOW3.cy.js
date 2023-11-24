import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js";
export function Case3() {

  //it("Stres testing ", function () {
    IgnoreUncaughtException();

    // 3 flow: User enters a restaurant, adds goods to his basket and tries to complete the order

    cy.visit("https://market.dely.io/"); // visit the website
    cy.wait(3500);

    cy.get(".user-button > span").click();

    cy.get('[autofocus=""]').type("icristea@fusionworks.md");
    cy.get(".primary > .ng-star-inserted").click();
    cy.wait(3500);
    cy.get(".input-row").type("123456789");
    cy.get(`button[class='primary solid'] span[class='ng-star-inserted']`).click();
    cy.wait(3500);

    cy.reload(true)

    cy.get(".default-address").click();
    cy.wait(3500);

    //choose a geolocation
    cy.get("#suggest").type("Copenh");
    cy.wait(3500);
    cy.get("li:nth-child(1) a:nth-child(1)").click();
    cy.get(".next-button").click();
    cy.get(".action-box > :nth-child(2)").click();

    cy.get(
      '[style="margin-right: 0px;"] > .subcategory-item > .filter-item'
    ).click(); // select " New " tab

    cy.get(
      '[href="/restaurant/depanneur"] > app-restaurant > .restaurant-box > .card-img-container'
    ).click(); // click on Depanneur restaurant
    cy.wait(3500);

    cy.get(
      '[data-analytics-id="140"] > .food-info > .food-actions > .active > .text-add'
    ).click(); // add a product
    cy.get(
      '[data-analytics-id="141"] > .food-info > .food-actions > .active > .text-add'
    ).click(); // add a second product
    cy.get(
      '[data-analytics-id="142"] > .food-info > .food-actions > .active > .text-add'
    ).click(); // add another product
    cy.get(
      '[data-analytics-id="143"] > .food-info > .food-actions > .active > .text-add'
    ).click(); // add another product
    cy.wait(3500);

    cy.get(".cart-dropdown-btn").click(); // click on my cart
    cy.wait(3500);
    cy.get(".primary > .ng-star-inserted").click(); // Click on Keep going

    cy.get('[type="checkbox"]')
      .check({ force: true })
      .should("be.checked") // Passes
      .wait(3500);

    cy.get(".primary > .ng-star-inserted").click(); // Click on Keep Going
    cy.get(".primary > .ng-star-inserted").click();
    cy.get(".col > .primary > .ng-star-inserted").click();
 // });
}