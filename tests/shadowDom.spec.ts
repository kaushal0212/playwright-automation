import {test,expect} from '@playwright/test'
test('ShedowDom test', async ({page})=>{

    await page.goto("https://selectorshub.com/xpath-practice-page/")
  
    await page.getByPlaceholder('enter name', { exact: true }).fill("Ram")
    await page.getByPlaceholder("Enter pizza name").fill("Spicy chilly paneer");
    await page.pause();
   await page.getByText('Click to practice iframe inside shadow dom scenario', { exact: true }).click()

    
})