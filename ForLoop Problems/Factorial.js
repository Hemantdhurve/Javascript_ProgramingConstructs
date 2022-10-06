let num=require("readline-sync");
let n=parseInt(num.question("Enter the number : "));

let fact=1;
for(i=1;i<=n;i++)
{
    fact=fact*i;
}
console.log("Factorial of " + n +"! is =" +fact)
