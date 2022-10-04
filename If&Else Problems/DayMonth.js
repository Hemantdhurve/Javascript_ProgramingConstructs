var inp=require("readline-sync");

var month=inp.question("Enter Month in numeric format :");
if(month>=3 && month <=6)
{
    console.log("Condition Satisfied")
    var day=inp.question("Enter day in numeric format :");
    if((day>=20 && month<=3) || (day<=20 && month<=6))
    {
        console.log("Day :"+day + " Month :"+month + " Is in Range");
    }
    else
    {
        console.log("Day :"+day + " Month :"+month + " Is Not in Range");
    }
}
else
{
    console.log("Condition False")
}