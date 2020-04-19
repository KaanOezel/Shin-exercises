//Final Version - Using a button to call function

function calculateRetirementYear(){
    let age = +prompt ("Please enter your age");
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let retirementAge = +prompt ("Please enter your retirement age");
    let yearsLeft = retirementAge - age; 
    let retirementYear = currentYear + yearsLeft;
    document.write ("You will be retired in year " + retirementYear + "<br>");
    document.write (yearsLeft + " years left till you retire");
}

// I wanted to style result of document write and display it in the center of the screen but couldn't do it!

//======================End of Final Version=======================================

//Solution 1 with fixed values
/*
let age = 30;
let currentYear = 2020; 
let retirementAge = 65; 
let yearsLeft = retirementAge - age; 
let retirementYear = currentYear + yearsLeft;


document.write ("You will be retired in year " + retirementYear + "<br>");
document.write (yearsLeft + " years left till you retire");
*/

//Solution 1 using a function

/*
let age = 30;
let currentYear = 2020; 
let retirementAge = 65; 
let yearsLeft = retirementAge - age; 
let retirementYear = currentYear + yearsLeft;

function calculateRetirementYear(){
    document.write ("You will be retired in year " + retirementYear + "<br>");
    document.write (yearsLeft + " years left till you retire");
}
calculateRetirementYear ();
*/
//===========================End of Solution 1======================================


//Solution 2 - Getting input from user instead of using fixed values and getting date from computer using JS Date method

/*
let age = +prompt ("Please enter your age");
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let retirementAge = +prompt ("Please enter your retirement age");
let yearsLeft = retirementAge - age; 
let retirementYear = currentYear + yearsLeft;

document.write ("You will be retired in year " + retirementYear + "<br>");
document.write (yearsLeft + " years left till you retire"); 
*/


//Solution 2 - Displaying result in an alert box

/*
function calculateRetirementYear(){
    return yearsLeft + " years left till you retire\n" + "You will be retired in year " + retirementYear;
 
}
alert (calculateRetirementYear ());
*/

//===========================End of Solution 2======================================