/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload=pageReady;
//create page load function
function pageReady(){
	//create variables for required HTML elements
	var dateVar= new Date();
	var todayDate=document.getElementById("todayData");
	var finalDate=document.getElementById("finalData");
	var dueDays=document.getElementById("dueData");
	var countMsg=document.getElementById("countMsg");
	//create variables for now date and due date
	myDate=dateVar.toDateString();
	var finalDateVar=new Date("Fri Dec 13 2023 18:00:00");
	dueDate=finalDateVar.toDateString();
	console.log(myDate,dueDate);
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	todayDate.innerHTML=myDate;
	finalDate.innerHTML=dueDate;
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE
	var todayDateTime=dateVar.getTime();
	var dueDateTime=finalDateVar.getTime();
	var timeDiff=dueDateTime-todayDateTime;
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS
		var daysTillNow= Math.floor(timeDiff/86400000);
		dueDays.innerHTML=daysTillNow;
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
	if(dueDateTime<todayDateTime){
		countMsg.innerHTML="The Deadline for the Final Assignment has passed!";
	}
}