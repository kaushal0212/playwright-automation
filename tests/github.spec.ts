// @ts-ignore: Playwright types are provided by the project's test setup.
import { test, expect } from '@playwright/test';

//test.use(ignoreHTTPSErrors: true)
test('Login test', async ({ page }) => {
    // await page.pause()
    await page.goto('https://github.com/login');
   await expect(page.getByRole('heading',{name: "Sign in to GitHub"})).toBeVisible();
    await page.getByLabel("Username or email address").fill("kaushal")
    await page.getByLabel("Password").fill("TEST")
    // await page.getByRole('button', { name: 'Sign in' }).click();
//    await page.getByRole('button', { name: 'Sign in' ,exact:true}).click();
    await expect(page.getByRole('button',{name:'Sign in',exact:true})).toBeVisible();
    await expect(page.getByRole('link',{name:"Forgot password?"})).toBeVisible();
    await expect(page.getByRole('link',{name : "Create an account"})).toBeVisible();
    await expect(page.getByRole('button',{name: "Sign in with a passkey"})).toBeVisible();

});