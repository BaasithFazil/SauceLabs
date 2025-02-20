// locators.js
export const LOGIN_PAGE = {
    usernameField: '#user-name',
    passwordField: '#password',
    loginButton: '#login-button',
    errorMessage: '[data-test="error"]',
};
export const INVENTORY_PAGE = {
    productHeader: '.header_secondary_container',
    addToCartButton: (productName) => `//div[text()='${productName}']/ancestor::div[@class='inventory_item']//button`,
};