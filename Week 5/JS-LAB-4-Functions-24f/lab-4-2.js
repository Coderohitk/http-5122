//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION


//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageNum(num1,num2,num3,num4,num5){
var average=(num1+num2+num3+num4+num5)/5;
return average.toFixed(1);
}
console.log(averageNum(5,10,15,20,25));

//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var course1=80;
var course2=75;
var course3=85;
var course4=90;
var course5=65;
function checkResults(){
    if(averageNum(course1,course2,course3,course4,course5)>=70){
        alert("Success");
    }
    else{
        alert("Review Required");
    }
}
checkResults();