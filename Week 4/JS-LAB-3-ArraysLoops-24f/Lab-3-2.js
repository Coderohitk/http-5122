//LAB 3 - ARRAYS & LOOPS - PART 2


//TEAM MEMBER ARRAY
var memberArray=["Sumit","Nitish","Jinal","Suman"];

//OUTPUT TEAM ARRAY TO JS CONSOLE
console.log(memberArray);

//REMOVE LAST MEMBER
memberArray.pop(0);
console.log(memberArray);
//ADD SEAN TO FRONT OF ARRAY
memberArray.unshift("Sean");
console.log(memberArray);

//REARRANGE THE ARRAY ALPHABETICALLY
console.log(memberArray.sort());

//OUTPUT REQUIRED MESSAGE TO JS CONSOLE
console.log("We have "+memberArray.length+" people in our group")

//LOOP THROUGH ARRAY TO OUTPUT TEAM MEMBERS/NUMBERS TO JS CONSOLE
for(var i=0;i<memberArray.length;i++){
    num=i+1
    console.log(memberArray[i]+" is # "+num);
}
