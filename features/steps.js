const { Given, When, Then } = require('@cucumber/cucumber');
const selectors = require('../selectors');
const helpers = require('../helpers');

Given('I navigate to google', async function () {
    await helpers.builder();
    await helpers.navigate(selectors.url);
  });

  Given('I accept cgu', async function () {
    await helpers.click(selectors.accept_cgu);
  });

  When('I fill {string} in the search bar', async function (string) {
    await helpers.fillText(selectors.search_bar, string);
  });

  Then('I should have a result', async function () {
    await helpers.click(selectors.search_button);
    await helpers.quit();
  });