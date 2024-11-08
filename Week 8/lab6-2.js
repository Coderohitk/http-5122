//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
window.onload = pageReady;

//'WRAPPER' FUNCTION FOR DOM LOGIC
function pageReady() {
	//GET DOM ELEMENTS WE'LL NEED
	var mysteryBox = document.getElementById("mysteryBox");
	var buttonBox = document.getElementById("buttonBox");

	//====CREATE THE FUNCTIONS WE'LL NEED====
	function mysteryBoxCheck() {
		//FUNCTION TO ASK USER
		var check = confirm("Do you want to see something?")
		console.log(check);
		if (check) {
			mysteryBox.style.display = 'none';
			buttonBox.style.display = 'block';
		}
	}
	//FUNCTION TO CHANGE buttonBox
	function buttonBoxCheck() {
		buttonBox.style.background = "orange";
		buttonBox.style.width = "600px";
		buttonBox.innerHTML = "<h2>SURPRISE</h2>";
	}

	//SETUP LISTENERS
	mysteryBox.onmousemove = mysteryBoxCheck;
	buttonBox.onclick = buttonBoxCheck;
}
//END onload FUNCTION

/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};



window.onload = function () {
	//Required Variables
	var formHandle = document.forms.form_ship;
	var thanksMsg = document.getElementById("thanks_msg");
	var thanksCustomer = document.getElementById("thanksCustomer");
	var thanksSpeed = document.getElementById("thanksSpeed");
	var thanksPC = document.getElementById("thanksPC");
	var thanksCost = document.getElementById("thanksCost");
	shipInfo.name = formHandle.f_Name;
	shipInfo.pc = formHandle.f_pc;
	shipInfo.speed = formHandle.f_speed;
	shipInfo.cost = shipInfo.speed.value;

	//Functions
	function processForm() {
		// alert("form sent");
		if(shipInfo.speed.value === "0"){
			shipInfo.speed.style.background = "red";
			shipInfo.speed.focus();
			return false;
		}
		shipInfo.speed.onchange = goSpeedDD();
		function goSpeedDD () {
			shipInfo.cost = shipInfo.speed.value;
		}
		if (shipInfo.name.value === "") {
			shipInfo.name.style.background = "red";
			shipInfo.name.focus();
			return false;
		}
		if (shipInfo.pc.value === "") {
			shipInfo.pc.style.background = "red";
			shipInfo.pc.focus();
			return false;
		}
		formHandle.style.display = "none";
		thanksMsg.style.display = "block";
		thanksCustomer.innerHTML = shipInfo.name.value;
		thanksSpeed.innerHTML = shipInfo.speed.options[shipInfo.speed.selectedIndex].text;
		thanksPC.innerHTML = shipInfo.pc.value;
		thanksCost.innerHTML = shipInfo.cost;

		return false;
	}

	//Listeners
	formHandle.onsubmit = processForm;
};
