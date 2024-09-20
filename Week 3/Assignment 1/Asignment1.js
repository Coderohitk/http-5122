var enteredNumber = prompt("What is your team number");
var groupNumber = 3;
if (enteredNumber == groupNumber) 
    {
    var firstName = prompt("enter your first name");
    switch (firstName) {
        case "Jinal":
            alert("Welcome Jinal Vijaykumar patel");
            break;
        case "Suman":
            alert("Welcome Suman Rani");
            break;
        case "Joyce":
            alert("Welcome Joyce Wanchan lin");
            break;
        case "Nitish":
            alert("Welcome Nitis Sharma");
        default:
            alert("access denied");
    }
}
else {
    alert("access denied");
}