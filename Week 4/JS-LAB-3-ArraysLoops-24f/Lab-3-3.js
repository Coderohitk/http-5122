//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var cartArray = [];
var totalPrice = 0;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while (totalPrice < 35) {
	//GET ITEM COST FROM USER
	var firstItem=prompt("Enter the price of the item:");
	//CONVERT USER INPUT TO A NUMBER
    var itemPrice = parseInt(firstItem);
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
    totalPrice += itemPrice;
	//PUSH ITEM COST TO CART ARRAY
    cartArray.push(itemPrice);
}
	
	
	
//SEND POPUP MESSAGE TO USER
alert("Your shipping for this order will be free!");

//SEND OUTPUT TO CONSOLE

console.log("Item price:"+cartArray.join("|"));