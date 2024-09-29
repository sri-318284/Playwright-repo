let inputString="malayalam"
function isPalindrome(){

    let str=inputString.split("");
    let revstr="";
    for(let i=str.length-1;i>=0;i--){

        revstr=revstr+str[i];
    }

    if(revstr===inputString){

        return true;
    } else {

        return false;
    }


    

}

console.log(isPalindrome());

