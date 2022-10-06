let num=require("readline-sync");
let n=parseInt(num.question("Enter Any number to Find the Prime Factors : "));

for(i=2;i*i<=n;i++)
{
    while(n % i==0)
    {
        console.log(i);
        n=n/i;
    }
}
if(n>2) 
{
    console.log(n);
}