//Unit Conversion from inches to feet
console.log("Converting 42 Inches to feet :")
let inches=42;
let feet=inches/12;
console.log("42 Inches equals 1 feet is :"+ feet + "feet");


//Rectangular Plot unit Conversion feet to meter
var number=require("readline-sync");                  //readline-sync is used for take input user defined

let length=number.question("Enter Length in feet\n");
let breadth=number.question("Enter Length in feet\n");

console.log("length :" + length +"\nbreadth :" + breadth);
console.log("Given 1 feet=0.3048 meters")
let area=(length*0.3048)*(breadth*0.3048);
console.log("Area of Rectangular Plot in meters is : "+area +"Square meters")

//Area of 25 Plots in acers
console.log("Given 1 acer = 43560 ft^2 ")
let area2=(length*breadth*25)/43560;
console.log("Area of 25 plots is :"+area2 +"acers");