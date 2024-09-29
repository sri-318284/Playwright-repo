let str1="silent";
let str2="listen";




function isAnagram(string1, string2){

    let sortedstring1=str1.split("").sort().join();
    let sortedstring2=str2.split("").sort().join();

    if(sortedstring1==sortedstring2){

        console.log("Given strings are anagaram");
        
    } else {

        console.log("Given strings are not anagaram");
        
    }

}



isAnagram(str1,str2);