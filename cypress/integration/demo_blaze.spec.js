import demoLocators from "../fixtures/demoLocators";

describe("DemoBlaze tests", () => {
  it("Signup manually and add phone to cart", () => {
    const randNumber = Math.floor(Math.random() * Math.floor(10000));
    const userName = `testBlaze${randNumber}`;
    const password = "testBlaze123";
    cy.visit("/");

    cy.get(demoLocators.signUpButton).click();

    cy.wait(1000); // wait for the input field to be ready to receive input

    cy.get(demoLocators.signUpUsername).type(userName);

    cy.get(demoLocators.signUpPassword).type(password);
    cy.get("button")
      .contains("Sign up")
      .click();

    cy.get(demoLocators.loginButton).click();
    cy.wait(1000); // wait for the input field to be ready to receive input

    cy.get(demoLocators.loginUsername).type(userName);
    cy.get(demoLocators.loginPassword).type(password);
    cy.get("button")
      .contains("Log in")
      .click();

    cy.get(demoLocators.logouButton).should($el => {
      expect($el).to.be.visible;
    }); // asserts that the logout button is visible which confirms we are logged in
    cy.get('[class="card-block"]')
      .find("h4")
      .contains("Samsung galaxy s6")
      .click();
    cy.get("h2").contains("Samsung galaxy s6");
    cy.get("a")
      .contains("Add to cart")
      .click();

    cy.get("a")
      .contains("Cart")
      .click();

    cy.get("td").contains("Samsung galaxy s6"); // utilize cypress default assertion
  });

  it("Signup and set auth token via network request and then add phone to cart", () => {
    cy.createUser(); // skips the ui
    cy.visit("/");
    cy.get(demoLocators.logouButton).should($el => {
      expect($el).to.be.visible;
    }); // asserts that the logout button is visible which confirms we are logged in
    cy.get('[class="card-block"]')
      .find("h4")
      .contains("Samsung galaxy s6")
      .click();
    cy.get("h2").contains("Samsung galaxy s6");
    cy.get("a")
      .contains("Add to cart")
      .click();

    cy.get("a")
      .contains("Cart")
      .click();
    cy.get("td").contains("Samsung galaxy s6"); // utilize cypress default assertion
  });
});
