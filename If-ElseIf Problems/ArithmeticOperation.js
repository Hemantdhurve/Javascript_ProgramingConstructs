
var num=require("readline-sync");

let a = parseFloat(num.question("Enter value of a :"));
let b = parseFloat(num.question("Enter value of b :"));
let c = parseFloat(num.question("Enter value of c :"));

const Op1=(a+b*c).toFixed(2);
const Op2=(a%b+c).toFixed(2);
const Op3=(c+a/b).toFixed(2);
const Op4=(a*b+c).toFixed(2);

console.log("a+b*c : " + Op1);
console.log("a%b+c : " + Op2);
console.log("c+a/b : " + Op3);
console.log("a*b+c : " + Op4);

console.log("Maximum Number is :")
if(Op1>Op2 && Op1>Op3 && Op1>Op4)
{
    console.log(Op1)
}
else if(Op2>Op1 && Op2>Op3 && Op2>Op4)
{
    console.log(Op2)   
}
else if(Op3>Op1 && Op3>Op2 && Op3>Op4)
{
    console.log(Op3)   
}
else if(Op4>Op1 && Op4>Op2 && Op4>Op3)
{
    console.log(Op4)   
}

console.log("Minimum Number is : ")
if(Op1<Op2 && Op1<Op3 && Op1<Op4)
{
    console.log(Op1)
}
else if(Op2<Op1 && Op2<Op3 && Op2<Op4)
{
    console.log(Op2)   
}
else if(Op3<Op1 && Op3<Op2 && Op3<Op4)
{
    console.log(Op3)   
}
else if(Op4<Op1 && Op4<Op2 && Op4<Op3)
{
    console.log(Op4)   
}