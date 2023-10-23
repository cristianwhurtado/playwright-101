import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');
import {URLS, CREDENTIALS} from '../data/constantes'

test('User must be logged in successfully.', async ({ page }) => {
  await page.goto(URLS.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.submitLoginForm(CREDENTIALS.SAUCEDEMOUSER, CREDENTIALS.SAUCEDEMOPASS);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});