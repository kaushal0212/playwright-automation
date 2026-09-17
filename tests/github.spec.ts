// @ts-ignore: Playwright types are provided by the project's test setup.
import { test, expect } from '@playwright/test';

//test.use(ignoreHTTPSErrors: true)
test.only('Login test', async ({ page }) => {
     await page.pause()
    await page.goto('https://github.com/login');
   
    await page.getByLabel("Username or email address").fill("kaushal")
    await page.getByLabel("Password").fill("TEST")
    // await page.getByRole('button', { name: 'Sign in' }).click();
//    await page.getByRole('button', { name: 'Sign in' ,exact:true}).click();
    await page.getByRole('button',{name:'Sign in',exact:true}).click();
});