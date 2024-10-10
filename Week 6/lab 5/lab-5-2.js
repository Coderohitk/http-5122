//#### LAB 5 - FUNCTIONS & OBJECTS ####
//PART 2:  MAKE THE BANK
//1. Create the object structure first.
var bankCustomer={
    lastName:"",
    branchNumber:"",
    accountBalance:500.25,
    multipleAccount:true,
    interestRate:1.03,
    getInterestRate:function(){
        {var interest=0;
            if(this.multipleAccount===true){
             interest=interest+.005+1.03;   
        }else{
            interest=1.03;
        }}
        return interest;
    },
    makeDeposit:function(depositAmount){
        this.accountBalance=this.accountBalance+depositAmount;
        return "Thank you, your current balance is now $"+bankCustomer.accountBalance ;
    },
    makeWithdrawal:function(withdrawlAmount){
        this.accountBalance=this.accountBalance-withdrawlAmount;
        return "Thank you, your current balance is now $"+bankCustomer.accountBalance;

    },
    addInterest:function(){
        this.accountBalance= this.accountBalance*this.getInterestRate();
        this.accountBalance.toFixed(2);
        return "Thank you, your current balance is now $"+this.accountBalance.toFixed(2); 
    }
    

};
console.log(bankCustomer.makeDeposit(200)); 
console.log(bankCustomer.makeWithdrawal(75));
console.log(bankCustomer.addInterest());


//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!


