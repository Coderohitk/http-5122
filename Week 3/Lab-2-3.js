//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var userName=confirm("Would you like to join our mailing list");
var signUpEmail;

//==== LOGIC =============
if(userName===true){
    signUpEmail=prompt("Please enter yout email address","me@example.com");
    if(signUpEmail==="" || signUpEmail===null || signUpEmail==="me@example.com"){
        alert("Thank you, but your email was not valid.");
 }
 else{
    alert("Thank you, our next newsletter will be sent to "+signUpEmail);
 }
}
else{
    alert("thank you we will not bother you again");
}
