var gender='female'; // Global Variable
let color='green';
function printGender(){
var age=38; // function scoped variable
if(gender.startsWith('female')){
    let color='blue'; // Block scoped variable
    console.log("She/Her");
    console.log("Inside the if block " +color);
} else{
    var phoneNumber="1234456";
    console.log("He/Him");
}

console.log("Inside the function block is "+age);
console.log("Inside the function block using let: " + color);  


}
console.log("Outside the function block : " + age);

printGender();
