const { expect } = require('@playwright/test');

exports.InventoryPage = class InventoryPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.order1 = page.locator('[data-test="product_sort_container"]');
    this.order2 = page.locator('[data-test="product_sort_container"]');
    this.order3 = page.locator('[data-test="product_sort_container"]');
    this.linkProduct = page.locator('#item_2_title_link');
    this.goBackButton = page.locator('[data-test="back-to-products"]');
  }

  async inventorySearch() {
    await this.order1.selectOption('hilo');
    await this.order2.selectOption('lohi');
    await this.linkProduct.click();
    await this.goBackButton.click();
    await this.order3.selectOption('za');
  }

};