// @ts-ignore: Playwright types are provided by the project's test setup.
import { test, expect } from '@playwright/test';
const pageURL = ('https://github.com/login')

//test.use(ignoreHTTPSErrors: true)
test('Login test', async ({ page }) => {
    // await page.pause()
    await page.goto(pageURL);
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

test('Scenario 2 without entering Credential',async({page})=>{
  
 await page.goto(pageURL);
  await expect(page.getByRole('heading',{name: "Sign in to GitHub"})).toBeVisible();

  const username = page.getByLabel('Username or email address');

  await page.getByRole('button', { name: 'Sign in' }).click();

  const errorMessage = await username.evaluate(
    (element: HTMLInputElement) => element.validationMessage
  );

  console.log('Validation Message:', errorMessage);

  expect(errorMessage).toBeTruthy();
});

test("Scenario 3 Wrong Credentials", async({page})=>{
await page.goto(pageURL)
await expect(page.getByRole('heading',{name: "Sign in to GitHub"})).toBeVisible();
    await page.getByLabel("Username or email address").fill("Test@test.com")
    await page.getByLabel("Password").fill("TEST123")
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Locate the alert
  const errorMessage = page.getByRole('alert');
  //wait for it and validate the text
  await expect(errorMessage).toBeVisible();
  await expect(errorMessage).toContainText("Incorrect username or password.")
console.log("Error Message: ",await errorMessage.innerText());
})