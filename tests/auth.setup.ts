import { test as setup, expect } from '@playwright/test';

const demoUserAuthFile = 'auth.demouser.json';
const favUserAuthFile = 'auth.fav_user.json';

setup('Authenticate as demouser', async ({ page }) => {
  await page.goto('https://bstackdemo.com/signin');

  await page.getByText('Select Username', { exact: true }).click();
  await page.getByText('demouser', { exact: true }).click();

  await page.getByText('Select Password', { exact: true }).click();
  await page.getByText('testingisfun99', { exact: true }).click();

  await page.getByRole('button', { name: /log in/i }).click();

  await expect(page.getByText('Logout', { exact: true })).toBeVisible();

  await page.context().storageState({
    path: demoUserAuthFile,
  });
});

setup('Authenticate as fav_user', async ({ page }) => {
  await page.goto('https://bstackdemo.com/signin');

  await page.getByText('Select Username', { exact: true }).click();
  await page.getByText('fav_user', { exact: true }).click();

  await page.getByText('Select Password', { exact: true }).click();
  await page.getByText('testingisfun99', { exact: true }).click();

  await page.getByRole('button', { name: /log in/i }).click();

  await expect(page.getByText('Logout', { exact: true })).toBeVisible();

  await page.context().storageState({
    path: favUserAuthFile,
  });
});