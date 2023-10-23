import { test, expect } from '@playwright/test';
const { InventoryPage } = require('../pages/inventory-page');

test('User inventory navigation.', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.inventorySearch();
});