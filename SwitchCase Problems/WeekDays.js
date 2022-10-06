let day=require("readline-sync");
var digit=parseInt(day.question("Entered Number is :"));

switch(digit)
{
    case 1:
        console.log("Number 1 Assigned as SUNDAY");
        break;
    case 2:
        console.log("Number 2 Assigned as MONDAY");
        break;
    case 3:
        console.log("Number 3 Assigned as TUESDAY");
        break;
    case 4:
        console.log("Number 4 Assigned as WEDNESDAY");
        break;
    case 5:
        console.log("Number 5 Assigned as THURSDAY");
        break;
    case 6:
        console.log("Number 6 Assigned as FRIDAY");
        break;
    case 7:
        console.log("Number 7 Assigned as SATURDAY");
        break;
    default:
        console.log("You Entered Wrong Input");
        break;
}
