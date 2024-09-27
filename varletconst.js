/*Assignment Details:
Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave differently when printed.
Assignment Requirements:
1. Declare a const name as browserVersion (global)
2. Assign value as Chrome
3. Create a function by name getBrowserVersion
4. Create if condition inside function to check if browser is chrome, then
5. Declare a local variable (browserVersion) and print that variable inside function (outside block)
6. Call that function from the javascript*/


const browserVersion="Chrome";
function getBrowserVersion(){

    if(browserVersion.startsWith("Chrome")){

        let browserVersion;
      
        
    }else{

        console.log("unsupported browser");
        
    }

    console.log("BrowserVersion inside the function block is " + browserVersion);    
}


getBrowserVersion();

