import { test, expect } from "@playwright/test";
const pageURL= ("https://saucelabs.com/")
test("Sauce Lab Pricing link", async ({ page }) => {
  await page.goto(pageURL);
  console.log("Page Title:", await page.title());
  await expect(page).toHaveTitle(
    "Sauce Labs: AI-Unified Release Assurance Platform",
  );
  await page.getByRole("link", { name: "PRICING" }).click();
  await expect(page).toHaveTitle("Pricing | Sauce Labs");
  await expect(
    page.getByRole("heading", { name: "PRICING PLANS" }),
  ).toBeVisible();
});

test("Sign Up for free", async ({page})=>{
await page.goto(pageURL);
//await page.getByRole('link',{name :"Start Free"}).first().click();
await page.getByText('Start Free').first().click();
//await page.locator('a[href="https://saucelabs.com/sign-up"]').click();
await page.getByRole('link',{name:"SIGN UP WITH EMAIL"}).click()
await page.getByRole('textbox',{name: "Business Email"}).fill("test@yoyo.com")
await page.getByRole('textbox',{name :"Username"}).fill("Test123")
await page.getByPlaceholder("Password").fill("Test@123")
await expect(page.getByRole('button',{name: "SIGN UP"})).toBeVisible()

})