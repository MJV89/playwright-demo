import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { HeaderPage } from "./header.page";

export class ItemPage extends BasePage {
  readonly header: HeaderPage = new HeaderPage(this.page);

  readonly addButton: Locator = this.page.getByRole("button", { name: "Add to cart" });

  constructor(page: Page) {
    super(page);
  }

  async addToCart(): Promise<void> {
    await this.addButton.click();
  }
}
