import test from "@playwright/test";

test("creting storage state", async ({ page }) => {

await page.goto('https://bstackdemo.com/signin');

    await page.getByText('Select Username', { exact: true }).first().click();
    await page.getByText('demouser',{exact: true}).click();
    await page.locator('#password').click();
    await page.getByText('testingisfun99',{exact: true}).click();
    await page.locator('#__next').getByRole('button', { name: 'Log In' }).click();
    //save storage session

await page.context().storageState({path:'test_data/authentication.json'})
    
})