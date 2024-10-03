/*Assignment Details: Your task is to print the title and url of a web page using Playwright. 

Precondition: - 
- Launch Chromium in non-headless mode 
- Create a new browser context. 
- Open a new page within the browser context. 
- Load the url https://login.salesforce.com/ 
- Use your Salesforce credentials that you’ve created Requirements: 
- Enter the username. 
- Enter the password. 
- Click the Login button. 
- Wait for 10 seconds 
- Print the page title and the current url of the page 
- Close the browser Expected Outcome:*/


import { chromium,firefox, test } from "@playwright/test";
test("To launch the browser", async () => {

    const browserInstance=await chromium.launch({headless:false, channel: "msedge"});
    const browserContext=await browserInstance.newContext();
    const page=await browserContext.newPage();
    await page.goto("https://www.redbus.in");
    const url=page.url();
    console.log(`The url of the page in chrome brwser is ${url}`);
    const title=await page.title();
    console.log(`The title of the page is ${title}`);


    const browserInstance1=await firefox.launch({headless:false, channel: "firefox"});
    const browserContext1=await browserInstance1.newContext();
    const page1=await browserContext1.newPage();
    await page1.goto("https://www.flipkart.com");
    const url1=page1.url();
    console.log(`The url of the page in firefox browser is ${url1}`);
    const title1=await page1.title();
    console.log(`The title of the page is ${title1}`);



    



    
})