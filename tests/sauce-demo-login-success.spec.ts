// spec: specs/sauce-demo-login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Login Authentication', () => {
  test('Successful login with standard user', async ({ page }) => {
    // 1. Start from a fresh browser context and navigate to https://www.saucedemo.com/.
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();

    // 2. Enter standard_user in the Username textbox.
    await page.locator('[data-test="username"]').fill('standard_user');
    await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');

    // 3. Enter secret_sauce in the Password textbox.
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.locator('[data-test="password"]')).toHaveAttribute('type', 'password');

    // 4. Click the Login button.
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    await expect(page.getByText('Products', { exact: true })).toBeVisible();
    await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();


    // const expectedProducts = page.locator(
    //   '[data-test="item-4-title-link"], [data-test="item-0-title-link"]',
    // );
   // await expect(expectedProducts.first()).toHaveText(/Sauce Labs (Backpack|Bike Light)/);
    await expect(page.locator('[data-test="error"]')).not.toBeVisible();
  });
});
