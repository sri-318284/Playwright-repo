import { chromium, test } from "@playwright/test";

test("To launch a browser", async () => {

const browserInstance = await chromium.launch({ headless: false, channel:
"chrome" });

const browserContext = await browserInstance.newContext();

const page = await browserContext.newPage();

await page.goto("http://leaftaps.com/opentaps/control/main");

const url=page.url();
console.log("URL of tghe page is "+ url);

const pageTitle=await page.title();
console.log("Title of the page is "+ pageTitle);




});