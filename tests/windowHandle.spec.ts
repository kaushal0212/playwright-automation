import{test,expect} from '@playwright/test';

test.skip('window handle test',async({page,context}) =>{
 await page.goto('https://the-internet.herokuapp.com/windows');
 const [newTab]=await Promise.all
 ([context.waitForEvent("page"), page.getByRole("link",{name:'Click Here'}).click()
])
 await newTab.waitForLoadState();
 await expect(newTab.getByRole('heading',{name:'New Window'})).toBeVisible();
});

test("Login test", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/login")
    await page.getByLabel("Username").fill("tomsmith")
    await page.getByLabel("Password").fill("SuperSecretPassword!")
    // await page.getByRole('button',{name:" Login"}).click()
  await page.locator('i:has-text("Login")').click()
})

test("Multipal window handel",async ({page,context})=>{
  await page.goto("https://the-internet.herokuapp.com/");
 await page.getByText('Multiple Windows',{ exact: true}).click();
  const [newTab] = await Promise.all([
  context.waitForEvent('page'), 
 page.getByRole('link',{name:'Click Here'})
   .click()
  ])
  await newTab.waitForLoadState();
  await expect(newTab).toHaveTitle('New Window');
 // await expect(newTab).toHaveURL('https://the-internet.herokuapp.com/windows/new');
  await expect(newTab).toHaveURL(/\/windows\/new/); // Not ('/windows/new') or ()
  

  
}
)