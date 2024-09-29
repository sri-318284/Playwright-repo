let input=" fly me   to   the moon";
function lastWordLength(){

let str= input.split(" ");
//console.log(str);
return str[str.length-1].length;


}

console.log(lastWordLength());


