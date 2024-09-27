/*Assignment Requirements:
Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript*/


function launchBrowser(browserName){

    if(browserName=="chrome"){

        console.log("Launch chrome browser");
        
    } else if(browserName=="edge"){

        console.log("Launch edge browser");
        

    }else if(browserName=="safari"){

        console.log("Launch safari browser");
    
    } else if(browserName=="firefox"){

        console.log("Launch firefox browser");
        
    } else {

        console.log("Invalid browser");
    }


}

launchBrowser("firefox");


function runTests(testType){

    switch(testType){

        case 'smoke':
            console.log("smoke testing");
            break;
        case 'sanity':
            console.log("sanity testing");
            break;
        case 'regression':
            console.log("regression testing");
            break;
        default:
            console.log("smoke testing");
            break;
        

            
    }

}

runTests("smoke");


