//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
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