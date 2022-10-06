let unit=require("readline-sync");
var digit=parseInt(unit.question("Enter the Numbers from the List as:\n 1\t10\t100\t1000\t10000\t100000\t10000000\n"));

switch(digit)
{
    case 1:
        console.log("Place Value of 1 is UNIT ");
        break;
    case 10:
        console.log("Place Value of 10 is TEN");
        break;
    case 100:
        console.log("Place Value of 100 is HUNDRED");
        break;
    case 1000:
        console.log("Place Value of 1000 is THOUSAND");
        break;
    case 10000:
        console.log("Place Value of 10000 is TEN THOUSAND");
        break;
    case 100000:
        console.log("Place Value of 100000 is LAKH");
        break;
    case 10000000:
        console.log("Place Value of 10000000 is CRORE");
        break;
    default:
        console.log("Please Enter Value From the Given List");
        break;
}