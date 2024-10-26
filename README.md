# Files from http-5122
## Front-End Web Development
## Course Code: HTTP 5122

### Academic Year: 2025-2026

This course delivers the fundamentals of computer programming and introduces the tools for creating interactive web pages using the JavaScript programming language.

# Links
https://www.w3schools.com/js/default.asp

# Images
![Front-End Web Development Overview](JS.png)

***Important Notice:*** This repository contains my weekly work for this course. It is recommended to practice regularly with JavaScript to enhance your coding skills and confidence.

# Example Codes
//This function will check if current temperature is good for dog walking or not
//It expects to receive... current temp in integer
//It will return...False if temperatur if greater than 30 or less than -10  
function checkTemp(currentTemp){
    if(currentTemp>30 || currentTemp< -10){
        return false;
    }
    else
    {
        return true;
    }
}



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var askTemp=prompt("Current temperature");
if(checkTemp(askTemp)===true){

    alert("You're good, have a nice walk!");
    
}else{
    alert("Yikes! This is no weather for dog walking!");   
}

