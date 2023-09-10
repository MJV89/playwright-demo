import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";

export class SuccessOrderPage extends BasePage {
  readonly completeHeading: Locator = this.page.locator("xpath=//div[@class='checkout_complete_container']//h2");

  constructor(page: Page) {
    super(page);
  }
}
