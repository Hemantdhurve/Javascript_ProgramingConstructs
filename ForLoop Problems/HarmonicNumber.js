let num=require("readline-sync");
let n=parseInt(num.question("Enter the number : "));

harmonicNo=0;
if(n!=0)
{
    console.log("Nth Harmonic Series we got : " +n);  
    for(i=1;i<=n;i++)
    {
        console.log("1/"+i + "+")
        harmonicNo +=1/i;        
    }    
    console.log("Sum of Harmonic Number of " + n + " is " + harmonicNo);
}
