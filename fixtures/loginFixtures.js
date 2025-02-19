import {test as base} from '@playwright/test';
import LoginPage from '../pages/loginPage';


export const test = base.extend({
    page: async ({browser}, use) => {
        const page = await browser.newPage();
        await use(page);
        await page.close();
    },

    loginPage : async({page}, use) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await use(loginPage);
    },
})

export {expect} from '@playwright/test';