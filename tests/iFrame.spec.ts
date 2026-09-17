import{test,expect} from '@playwright/test'
test('Handel iFrame', async({page})=>{
    await page.goto("https://demoqa.com/frames");
    const frame = page.frameLocator('#frame1');

   // const frame = page.frame({name: 'frame1'});

   // get the text from inside frame

   const headingText = await frame.locator('#sampleHeading').textContent();
   console.log(headingText)
})

test.only('Select Alert', async ({page})=>{
    await page.goto("https://demoqa.com/")
    await page.getByRole("heading",{name: "Alerts, Frame & Windows"}).click();
    await page.getByRole('link',{name: 'Alerts'}).click()
   await page.pause();
// select Click Button to see alert Button -> Click me
page.on('dialog',async dialog =>{
    console.log(dialog.message()); // Get alert text
    await dialog.accept("Hi Kaushal"); // click ok
});
//await page.getByRole('button',{name: "Click me"}).click();
//await page.locator("#alertButton").click();
//await page.locator("#timerAlertButton").click();
//await page.locator("#confirmButton").click();
await page.locator("#promtButton").click();

})