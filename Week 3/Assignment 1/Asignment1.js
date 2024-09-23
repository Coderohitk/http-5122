var enteredNumber = prompt("Which team number you belongs");//Pop up mesage for asking for team number
var groupNumber = 3; //giving 3 as required team number
if (enteredNumber == groupNumber)  // checked if enter team number is same as required team number
    {
    var firstName = prompt("enter your first name"); //if number is correct asking for ther first name
    switch (firstName) { //switch case to check if user has same first name as our good 4 classmates had
        case "Jinal":
            alert("Welcome Jinal Vijaykumar patel");// if same first name greet them by there full name
            break;
        case "Suman":
            alert("Welcome Suman Rani");// if same first name greet them by there full name
            break;
        case "Joyce":
            alert("Welcome Joyce Wanchan lin");// if same first name greet them by there full name
            break;
        case "Nitish":
            alert("Welcome Nitis Sharma");// if same first name greet them by there full name
            break;
        default:
            alert("Access denied!");//if first name is wrong alert message for access denied
    }
}
else {
    alert("access denied");//if number is not coorect then alert message for access denies
}