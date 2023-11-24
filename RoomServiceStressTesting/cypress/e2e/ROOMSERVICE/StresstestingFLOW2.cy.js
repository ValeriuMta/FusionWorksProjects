// 2 flow: User enters a restaurant and adds goods to his basket



import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js";
import { Case3 } from "./StresstestingFLOW3.cy.js";

export function Case2() {
  // it('Stres testing', function (){
  IgnoreUncaughtException();

  
  cy.visit("https://market.dely.io/"); // visit the website
  cy.wait(3500);

  cy.get(".user-button > span").click();

  cy.get('[autofocus=""]').type("icristea@fusionworks.md");
  cy.get(".primary > .ng-star-inserted").click();
  cy.wait(3500);
  cy.get(".input-row").type("123456789");
  cy.get(".primary > .ng-star-inserted").click();
  cy.wait(3500);

  cy.reload(true)
  cy.wait(3500);
  

  cy.get(".default-address").click();
  cy.wait(3500);
  // cy.get(':nth-child(1) > .p-menuitem-link > .p-menuitem-text')

  //choose a geolocation
  cy.get("#suggest").type("Copenh");
  cy.wait(3500);
  cy.get("li:nth-child(1) a:nth-child(1)").click();
  cy.get(".next-button").click();
  cy.get(".action-box > :nth-child(2)").click();

  cy.get(
    '[href="/restaurant/gao-dumpling-bar"] > app-restaurant > .restaurant-box > .card-img-container'
  ).click(); // click on Go Dumpling Bar restaurant

  cy.get(
    "body > app-root:nth-child(1) > main:nth-child(10) > app-restaurant-page:nth-child(2) > div:nth-child(4) > div:nth-child(1) > app-food-item:nth-child(1) > div:nth-child(2) > div:nth-child(3) > app-add-item-button:nth-child(2)"
  ).click(); // add a product
  cy.get(
    "body > app-root:nth-child(1) > main:nth-child(10) > app-restaurant-page:nth-child(2) > div:nth-child(4) > div:nth-child(1) > app-food-item:nth-child(2) > div:nth-child(2) > div:nth-child(3) > app-add-item-button:nth-child(2) > div:nth-child(1)"
  ).click(); // add a second product
  cy.get(
    "body > app-root:nth-child(1) > main:nth-child(10) > app-restaurant-page:nth-child(2) > div:nth-child(4) > div:nth-child(1) > app-food-item:nth-child(3) > div:nth-child(2) > div:nth-child(3) > app-add-item-button:nth-child(2)"
  ).click(); // add another product
  cy.get(
    "body > app-root:nth-child(1) > main:nth-child(10) > app-restaurant-page:nth-child(2) > div:nth-child(4) > div:nth-child(1) > app-food-item:nth-child(4) > div:nth-child(2) > div:nth-child(3)"
  ).click(); // add another product

  //Delete products
  cy.get(".cart-dropdown-btn > :nth-child(3)").click();
  cy.wait(3500);
  cy.get("div:nth-child(2) div:nth-child(2) button:nth-child(1)").click();
  cy.get(":nth-child(2) > .d-flex > .btn-remove").click();
  cy.get(":nth-child(3) > .d-flex > .btn-remove").click();
  cy.get(":nth-child(4) > .d-flex > .btn-remove").click();
Case3()
  // })
}
