import{test,expect} from '@playwright/test';

test('Alert test',async({page,context}) =>{
     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');


     page.on('dialog',async (dialog)=>

     {
         // await page.pause();
        
        console.log(dialog.message());
        await dialog.accept();
        //   await dialog.dismiss();
        //     await dialog.accept("Hello");

     });
     await page.getByRole("button",{name:'Click for JS Alert'}).click();

});

// https://demoqa.com/frames