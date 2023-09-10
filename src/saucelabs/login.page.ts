import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base.page";
import { InventoryPage } from "./inventory.page";

export class LoginPage extends BasePage {
  readonly username: Locator = this.page.locator("xpath=//input[@placeholder='Username']");
  readonly password: Locator = this.page.locator("xpath=//input[@placeholder='Password']");
  readonly buttonLogin: Locator = this.page.getByRole("button", { name: "Login" });

  constructor(page: Page) {
    super(page);
  }

  async goto() {
    await this.page.goto("https://www.saucedemo.com");
  }

  async logIn(username: string, password: string): Promise<InventoryPage> {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.buttonLogin.click();
    return new InventoryPage(this.page);
  }
}
