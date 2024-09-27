//Write a JavaScript function that evaluates a student's score and returns their grade using a switch statement to assess score ranges.


let score=90;

function grade(score){

    switch (true) {
        case (score>=0 && score<=35):
            console.log("Grade C");
            break;
        case (score>35 && score<=60):
            console.log("Grade B");
            break;
        case (score>60 && score<=80):
            console.log("Grade A");
            break;
        case (score>80 && score<=100):
            console.log("Grade A++");
            break;
    
        default:
            console.log("Invalid data");
            break;
    }

}

grade(score);


