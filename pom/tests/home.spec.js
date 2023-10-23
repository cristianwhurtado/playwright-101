import { test, expect } from '@playwright/test';
import {URLS, CREDENTIALS} from '../data/constantes'
const { InventoryPage } = require('../pages/inventory-page');
const { LoginPage } = require('../pages/login-page');


test('User must be logged in successfully.', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER, CREDENTIALS.SAUCEDEMOPASS);
  await expect(page).toHaveURL(URLS.SAUCEDEMOURLINV);
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.inventorySearch();
});
