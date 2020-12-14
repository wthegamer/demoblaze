import { dataSel, idSel } from "../support/testHelper";
const demoLocators = {
  loginButton: dataSel("#logInModal"),
  signUpButton: dataSel("#signInModal"),
  signUpUsername: idSel("sign-username"),
  signUpPassword: idSel("sign-password"),
  loginUsername: idSel("loginusername"),
  loginPassword: idSel("loginpassword"),
  logouButton: idSel("logout2")
};

export default demoLocators;
