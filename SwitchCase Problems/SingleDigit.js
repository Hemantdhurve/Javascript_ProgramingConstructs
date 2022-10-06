// let num=Math.floor(Math.random()*10);
let num=require("readline-sync");
var digit=num.question("Entered Number is :");


switch(digit)
{
    case "0":
        console.log("Number 0 written as ZERO")
        break;
    case "1":
        console.log("Number 1 written as ONE")
        break;
    case "2":
        console.log("Number 2 written as TWO")
        break;
    case "3":
        console.log("Number 3 written as THREE")
        break;
    case "4":
        console.log("Number 4 written as FOUR")
        break;
    case "5":
        console.log("Number 5 written as FIVE")
        break;
    case "6":
        console.log("Number 6 written as SIX")
        break;
    case "7":
        console.log("Number 7 written as SEVEN")
        break;
    case "8":
        console.log("Number 8 written as EIGHT")
        break;
    case "9":
        console.log("Number 9 written as NINE")
        break;
    default:
        console.log("You Have Entered Wrong Input")
        break;
}