import { chromium, test } from "@playwright/test";
test("To lauch chrome browser", async () => {


    const browser= await chromium.launch({headless:false, channel: "chrome"});
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url=page.url();
    console.log(`The url of the page is ${url}`);
    const title= await page.title();
    console.log(`The title of the page is ${title}`);






    
    
    
})