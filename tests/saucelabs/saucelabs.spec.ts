import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/saucelabs/login.page";

interface Sorting {
  option: string;
  text: string;
}

const sortContainer: Sorting[] = [
  { option: "az", text: "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)" },
  { option: "za", text: "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)" },
  { option: "lohi", text: "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)" },
  { option: "hilo", text: "Name (A to Z)Name (Z to A)Price (low to high)Price (high to low)" }
];

for (const option of sortContainer) {
  test(`Check Sorting ${option.option}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    const inventoryPage = await loginPage.logIn("standard_user", "secret_sauce");
    await expect(inventoryPage.page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await inventoryPage.sortListing(option.option);
    await expect(inventoryPage.sortContainer).toHaveText(option.text);
  });
}

const items: string[] = [
  "Sauce Labs Backpack",
  "Sauce Labs Bike Light",
  "Sauce Labs Bolt T-Shirt",
  "Sauce Labs Fleece Jacket",
  "Sauce Labs Onesie"
];

for (const item of items) {
  test(`Item Buy ${item}`, async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const inventoryPage = await loginPage.logIn("standard_user", "secret_sauce");

    const itemPage_1 = await inventoryPage.selectItem(item);

    await itemPage_1.addToCart();
    await expect(itemPage_1.header.cartBadge).toHaveText("1");

    const cartPage = await itemPage_1.header.cart();
    const yourInformationPage = await cartPage.checkOut();

    const finishPage = await yourInformationPage.fillForm("Lautaro", "Lopez", "1234");

    const successOrderPage = await finishPage.finish();
    await expect(successOrderPage.completeHeading).toHaveText("Thank you for your order!");
  });
}
