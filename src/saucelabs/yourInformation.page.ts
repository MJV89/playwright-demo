import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { HeaderPage } from "./header.page";
import { FinishPage } from "./finish.page";

export class YourInformationPage extends BasePage {
  readonly header: HeaderPage = new HeaderPage(this.page);

  //Detectar por ID
  readonly firstName: Locator = this.page.locator("#first-name");
  readonly lastName: Locator = this.page.locator("#last-name");
  readonly postalCode: Locator = this.page.locator("#postal-code");

  readonly buttonContinue: Locator = this.page.getByRole("button", { name: "Continue" });

  constructor(page: Page) {
    super(page);
  }

  async fillForm(firstname: string, lastname: string, postalcode: string): Promise<FinishPage> {
    await this.firstName.fill(firstname);
    await this.lastName.fill(lastname);
    await this.postalCode.fill(postalcode);
    await this.buttonContinue.click();
    return new FinishPage(this.page);
  }
}
