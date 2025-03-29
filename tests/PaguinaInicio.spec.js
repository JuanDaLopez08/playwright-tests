const {test, expect} = require('@playwright/test');

test('pagina Tdea Virtual', async ({page}) => {
  await page.goto('https://virtual.tdea.edu.co/');
  await expect(page).toHaveTitle('TdeA Virtual');
});