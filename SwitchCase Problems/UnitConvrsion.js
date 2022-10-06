
var option=require("readline-sync");
var select=parseInt(option.question("Select \n1)Feet-To-Inch : \n2)Inch-To-Feet : \n3)Feet-To-Meter : \n4)Meter-To-Feet : \n "));
console.log("You Have Choose : " + select);
switch(select) 
{
    case 1:
        var feet=option.question("Enter Feet Value : ");
        var feetToInch=(12*feet).toFixed(2);
        console.log("Feet to Inch conversion is :" + feetToInch + " inch");
        break;

    case 2:
        var inch=option.question("Enter Inch Value : ");
        var InchToFeet=(inch/12).toFixed(2);
        console.log("Inch to Feet  conversion is :" + InchToFeet + " feet");
        break;
    case 3:
        var feet=option.question("Enter Feet Value : ");
        var feetTometer=(feet/3.281).toFixed(2);
        console.log("Feet to Meter conversion is :" + feetTometer + " meter");
        break;
    case 4:
        var meter=option.question("Enter Meter Value : ");
        var meterToFeet=(3.281*meter).toFixed(2);
        console.log("Meter to Feet  conversion is :" + meterToFeet + " feet");
        break;
    default:
        console.log("Please Enter Proper Input");
        break; 

}