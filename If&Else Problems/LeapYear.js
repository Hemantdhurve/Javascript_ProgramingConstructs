
var num=require("readline-sync");
year=num.question("Enter the Year in YYYY format: ");
if(year % 4==0 && year % 400==0)
{
    console.log(year + " is a Leap Year");
}
else{
    console.log(year + " is a Not Leap Year");
}