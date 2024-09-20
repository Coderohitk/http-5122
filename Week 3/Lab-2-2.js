//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input
var userName="dart";
var password="vador";


//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var boxForUsername=prompt("Enter your username");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(boxForUsername);
//5. CREATE POPUP BOX FOR PASSWORD
var boxForPassword=prompt("Enter your us password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(boxForPassword);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(boxForUsername===userName && boxForPassword===password)
//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{
	alert("Welcome back"+" "+boxForUsername);
	console.log("login successful");
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
else{
	alert("invalid username/password");
	console.log("login fail");
}