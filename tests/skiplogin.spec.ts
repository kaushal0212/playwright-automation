
import { test, expect } from '@playwright/test';

test('skip login', async ({ page }) => {
  await page.goto('https://bstackdemo.com/?signin=true');

  await page.getByText('Sign In', { exact: true }).click();
  await page.getByText('Select Username', { exact: true }).click();
  await page.getByText('demouser', { exact: true }).click();

  await page.getByText('Select Password', { exact: true }).click();
  await page.getByText('testingisfun99', { exact: true }).click();

  await page.getByRole('button', { name: /log in/i }).click();

  await expect(page.getByText('Logout', { exact: true })).toBeVisible();
});