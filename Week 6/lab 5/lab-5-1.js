//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 1:  I OBJECT!
var meObject={
    firstName:"Rohit",
    lastName:"Kumar",
    dateOfBirth:12-18-1995,
    studentNumber: "N01718110",
    studentDetails:function (){
        alert("My name is "+meObject.firstName+" and my student number is "+meObject.studentNumber)
    }
};
console.log(meObject.firstName);
// alert("My name is "+meObject.firstName+" and my student number is "+meObject.studentNumber);
meObject.studentDetails();