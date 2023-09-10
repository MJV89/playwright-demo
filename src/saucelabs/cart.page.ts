import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { HeaderPage } from "./header.page";
import { YourInformationPage } from "./yourInformation.page";

export class CartPage extends BasePage {
  readonly header: HeaderPage = new HeaderPage(this.page);

  readonly buttonCheckout: Locator = this.page.locator(
    "xpath=//button[@class='btn btn_action btn_medium checkout_button']"
  );

  constructor(page: Page) {
    super(page);
  }

  async checkOut(): Promise<YourInformationPage> {
    await this.buttonCheckout.click();
    return new YourInformationPage(this.page);
  }
}
