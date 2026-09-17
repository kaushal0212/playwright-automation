// Scenario 1. Identify all important locators Find locators for:
// Username or email address , Password , Sign in button ,Forgot password? ,  Create an account ,
// Sign in with a passkey
import {test, expect} from '@playwright/test';

test("Scenario 1 All locators", async({page})=> {
    await page.goto("https://github.com/login")
await page.getByRole("textbox", {name: "Username or email address"}).fill('Test@123');
await page.getByLabel("Password").fill("HelloWorld");
await page.getByRole("button",{name:'Sign in'}).click();
//await page.pause();
await page.getByRole('link',{name:'Forgot password?'}).click();
await expect(page).toHaveURL('https://github.com/password_reset')


})