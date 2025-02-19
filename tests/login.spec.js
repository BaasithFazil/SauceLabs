import { test, expect } from '../fixtures/loginFixtures';
import users from '../data/users.json' assert { type: "json" }; 
import { ERROR_MESSAGES } from "../pages/messages";


test.describe('Positive Test Cases', () => {
  users.valid_users.forEach((user)=> {
    test(`Successfully login with valid credintials : ${user.username}`, async({loginPage, page})=> {

      await loginPage.login(user.username, user.password);

      if(user.username === "locked_out_user") {
        const errorMessage = await loginPage.errorMessage();
        expect(errorMessage).toContain(ERROR_MESSAGES.lockedOutMessage);

      } else {  
          await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
      }
    });
  });
});

test.describe('Negative Test Cases', () => {
  test('Login with valid username and invalid password', async({loginPage})=> {

    const invalidUser = users.invalid_credintials; 
    const validUser = users.valid_credintials;
    await loginPage.login(validUser.validUsername, invalidUser.invalidPassword);
  
    const errorMessage = await loginPage.errorMessage();
    expect(errorMessage).toContain(ERROR_MESSAGES.invalidCredintials);
  })

  test('Login with Invalid username and Valid password', async({loginPage})=> {

    const invalidUser = users.invalid_credintials;
    const validUser = users.valid_credintials;
    await loginPage.login(invalidUser.invalidUsername, validUser.validPassword);

    const errorMessage = await loginPage.errorMessage();
    expect(errorMessage).toContain(ERROR_MESSAGES.invalidCredintials);
  })

  test('Login with Invalid username and Invalid password', async({loginPage})=> {

    const invalidUser = users.invalid_credintials;
    await loginPage.login(invalidUser.invalidUsername, invalidUser.invalidPassword);

    const errorMessage = await loginPage.errorMessage();
    expect(errorMessage).toContain(ERROR_MESSAGES.invalidCredintials);
  })
})






 





