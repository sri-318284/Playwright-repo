import { chromium, test } from "@playwright/test";
test("To launch the browser",async () => {

    const browserInstance= await chromium.launch({headless:false, channel: "chrome"});
    const browserContext= await browserInstance.newContext();
    const page= await browserContext.newPage();
    await page.goto("https://login.salesforce.com/");
    const emailId= page.locator('#username');
    const password= page.locator('#password');
    const loginButton= page.locator('#Login');
    await emailId.fill("telkapalli.srikanth10-zabp@force.com");
    await password.fill("Test@123");
    loginButton.click();
    await page.waitForTimeout(10000);
    const url=page.url();
    console.log(`The current url of the page is ${url}`);
    const title= await page.title();
    console.log(`The title of the page is ${title}`);
    await browserInstance.close();



    
})