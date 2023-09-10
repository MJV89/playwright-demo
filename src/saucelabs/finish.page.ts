import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { HeaderPage } from "./header.page";
import { SuccessOrderPage } from "./successOrder.page";

export class FinishPage extends BasePage {
  readonly header: HeaderPage = new HeaderPage(this.page);

  readonly buttonFinish: Locator = this.page.getByRole("button", { name: "finish" });

  constructor(page: Page) {
    super(page);
  }

  async finish(): Promise<SuccessOrderPage> {
    await this.buttonFinish.click();
    return new SuccessOrderPage(this.page);
  }
}
