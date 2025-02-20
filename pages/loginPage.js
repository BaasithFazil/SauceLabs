import { LOGIN_PAGE } from "../objects/locators";
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator(LOGIN_PAGE.usernameField);
        this.passwordField = page.locator(LOGIN_PAGE.passwordField);
        this.loginButton = page.locator(LOGIN_PAGE.loginButton);
        this.errorMessageElement = page.locator(LOGIN_PAGE.errorMessage);
    }

    async errorMessage() {
        return await this.errorMessageElement.innerText();
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/');
      }

      async enterUsername(username) {
        await this.usernameField.fill(username);
      }

      async enterPassword(password) {
        await this.passwordField.fill(password);
      }
    
      async clickLoginButton() {
        await this.loginButton.click();
      }


      async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
      }

}

export default LoginPage;