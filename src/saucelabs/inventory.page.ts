import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { HeaderPage } from "./header.page";
import { ItemPage } from "./item.page";

export class InventoryPage extends BasePage {
  readonly header: HeaderPage = new HeaderPage(this.page);

  readonly sortContainer: Locator = this.page.locator("xpath=//select[@class='product_sort_container']");

  readonly inventoryItems: Locator = this.page.locator("xpath=//div[@class='inventory_item']");

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async sortListing(option: string) {
    await this.sortContainer.selectOption(option);
  }

  async selectItem(item: string): Promise<ItemPage> {
    await this.inventoryItems
      .locator("xpath=//div[@class='inventory_item_description']")
      .filter({ hasText: item })
      .getByRole("link")
      .click();
    return new ItemPage(this.page);
  }
}
/* RANDOM BUY
    const items = await this.inventoryItemTitle.all();
    const randomItem = items[Math.floor(Math.random() * items.length)];
    await randomItem.click();
*/
