//var num=require("readline-sync");
//let digit=num.question("Enter Positive Single Digit Number :");
let digit=Math.floor(Math.random()*10);
console.log("Random Single Digit Number Generated is : "+digit);

if(digit==0)
{
    console.log("Number 0 written as ZERO");
}
else if(digit==1)
{
    console.log("Number 1 written as ONE");
}
else if(digit==2)
{
    console.log("Number 2 written as TWO")
}
else if(digit==3)
{
    console.log("Number 3 written as THREE")
}
else if(digit==4)
{
    console.log("Number 4 written as FOUR")
}
else if(digit==5)
{
    console.log("Number 5 written as FIVE")
}
else if(digit==6)
{
    console.log("Number 6 written as SIX")
}
else if(digit==7)
{
    console.log("Number 7 written as SEVEN")
}
else if(digit==8)
{
    console.log("Number 8 written as EIGHT")
}
else if(digit==9)
{
    console.log("Number 9 written as NINE")
}
else 
{
    console.log("Wrong Input")
}
