# demoblaze

## How to run
1. Clone the repo
2. Make sure you meet the system requirements stated here: https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements
3. Change your directory to demoblaze `cd demoblaze`(This command might vary based on your current path)
2. `yarn install` or `npm install`
3. Run the spec file
    
    A. To see the tests run on a browser: On the command line run `yarn run cypress open` or `npx cypress open` and then in the gui click on demo_blaze.spec.js
    
    B. To run the tests in the terminal only: On the command line run `yarn run cypress run cypress/integration/demo_blaze.spec.js` or `npx cypress run cypress/integration/demo_blaze.spec.js`
    
If you have trouble running the tests please reachout with any questions.
    
  ## Notes about the tests

  These are the given test requirements:
  ```
  1. Navigate to https://demoblaze.com
  2. Click signup and create a new account
  3. Login to your account
  4. Add 'Samsung Galaxy S6" to your cart
  5. Navigate to the cart, and verify that you have the correct phone model
  ```

  There are two versions of the test. Since there are two versions of the test I have purposefully left in some duplicated code. In the first test the ui was utilized to signup and login. In the second test network requests were used to create a user and login via setting a cookie. 
  In a normal testing environment, the second test is my more preferred path. By skipping the ui you are reducing the chances of the test failing before it reaches what you are actually wanting to test. In this case that is adding a phone to the cart. 
  An argument can be made for the first version of the test which illustrates a full user flow from signup to add to cart. Personally I lean toward adding specific tests for login, signup, and add to cart. 
  
  
