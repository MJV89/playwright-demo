import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { CartPage } from "./cart.page";

export class HeaderPage extends BasePage {
  readonly cartBadge: Locator = this.page.locator("xpath=//span[@class='shopping_cart_badge']");
  readonly cartLink: Locator = this.page.locator("xpath=//a[@class='shopping_cart_link']");

  constructor(page: Page) {
    super(page);
  }

  async cart(): Promise<CartPage> {
    await this.cartLink.click();
    return new CartPage(this.page);
  }
}
