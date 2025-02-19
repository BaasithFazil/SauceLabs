
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("#user-name");
        this.passwordField = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessageElement = page.locator('[data-test="error"]');
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