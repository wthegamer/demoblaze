const randNumber = Math.floor(Math.random() * Math.floor(10000));
const userName = `testBlaze${randNumber}`;
const password = "testBlaze123";
Cypress.Commands.add("signup", () => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/signup",
    headers: { "content-type": "application/json" },
    body: {
      username: userName,
      password: password
    }
  });
});

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "https://api.demoblaze.com/login",
    headers: { "content-type": "application/json" },
    body: {
      username: userName,
      password: password
    }
  });
});

Cypress.Commands.add("createUser", () => {
  cy.signup();
  cy.login().then(resp => {
    const token = resp.body.replace("Auth_token: ", "");
    cy.log(token.toString());
    cy.setCookie("tokenp_", token.toString());
  });
});
