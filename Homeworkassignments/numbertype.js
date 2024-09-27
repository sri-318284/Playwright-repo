/*Assignment Requirements:
1. Create a function named that takes a number as a parameter.
2. Declare and initialize the variable.
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, and to handle the case when the number is zero.
4. Return the corresponding string value for each case.
5. Call the function and print the result.*/ 


let inputData=4;
function numberType(number){

    if(number>0){

        console.log("Given number is positive");
        
    } else if(number<0){

        console.log("Given number is negative");
        
    }else{

        console.log("Given number is neutral");
    }


}

numberType(inputData);
