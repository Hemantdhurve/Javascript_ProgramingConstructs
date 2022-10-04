
//[...Array(5)]=spread operator which stores 5 elements
//map()==> used when to made changes and get a new array

var ran=[...Array(5)].map(()=>Math.floor(Math.random()*900)+100);
console.log(ran);

//Finding Min and Max Value from the array
var min=Math.min(...ran);
console.log("Minimum value from the array is :"+min);
var max=Math.max(...ran);
console.log("Maximum value from the array is :"+max);