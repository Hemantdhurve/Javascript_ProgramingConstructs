var num=require("readline-sync");
let place=num.question("Enter the Numbers from the List as:\n 1\t10\t100\t1000\t10000\t100000\t10000000\n ");

if(place==1)
{
    console.log("Place Value of 1 is UNIT");
}
else if(place==10)
{
    console.log("Place Value of 10 is TEN");
}
else if(place==100)
{
    console.log("Place Value of 100 is HUNDRED");
}
else if(place==1000)
{
    console.log("Place Value of 1000 is THOUSAND");
}
else if(place==10000)
{
    console.log("Place Value of 10000 is TEN THOUSAND");
}
else if(place==100000)
{
    console.log("Place Value of 100000 is LAKH");
}
else if(place==10000000)
{
    console.log("Place Value of 10000000 is CRORE");
}
