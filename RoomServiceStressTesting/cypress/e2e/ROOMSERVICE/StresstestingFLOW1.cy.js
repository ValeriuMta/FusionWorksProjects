// 1 flow: User enters different restaurants and goes back to main page.

import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js";
import { Case2 } from "./StresstestingFLOW2.cy.js";
export function Case1() {
// it("Stres testing 1st flow", function () {
  IgnoreUncaughtException();

  const restaurant = [
    '[href="/restaurant/gao-dumpling-bar"] > app-restaurant > .restaurant-box > .card-img-container',
    '[href="/restaurant/made-in-italy"] > app-restaurant > .restaurant-box > .card-img-container',
    '[href="/restaurant/cakery-copenhagen"] > app-restaurant > .restaurant-box > .card-img-container',
    '[href="/restaurant/restaurant-vita"] > app-restaurant > .restaurant-box > .card-img-container',
    '[href="/restaurant/hubb-kitchens"] > app-restaurant > .restaurant-box > .card-img-container',
    '[href="/restaurant/dej"] > app-restaurant > .restaurant-box > .card-img-container',
  ];

  function visitRestaurant(restaurant) { console.log(restaurant)
    cy.get(restaurant).scrollIntoView().click(); //click on a restaurant
    cy.wait(3500);
    cy.go("back");
  }

  cy.visit("https://market.dely.io/"); // visit the website
  cy.wait(3500);

  cy.get(`app-user-widget[class='ng-star-inserted']`).then(($btn) => {
    if ($btn.hasClass(".user-button.authenticated.user-select-none.ng-star-inserted")) {
      cy.get(".user-button > span").click();
      cy.get("div.tabs").click();
      executeFlow()
    } else {
      executeFlow()
    }
    
    function executeFlow() {
      cy.wait(3500);
    
      visitRestaurant(restaurant[Math.floor(Math.random() * 6)]);
      visitRestaurant(restaurant[Math.floor(Math.random() * 6)]);
      visitRestaurant(restaurant[Math.floor(Math.random() * 6)]);
      visitRestaurant(restaurant[Math.floor(Math.random() * 6)]);
      visitRestaurant(restaurant[Math.floor(Math.random() * 6)]);
      visitRestaurant(restaurant[Math.floor(Math.random() * 6)]);
    }
    Case2()
  });
// });
}
import { IgnoreUncaughtException } from "../../../Support-errors/uncaught-exception.cy.js";

