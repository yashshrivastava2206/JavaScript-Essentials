let num=[1,2,3,4,5,6,7];
const sum =num.reduce(function(acc,curr){
    return curr+acc
},0);
console.log(sum);
let product=num.reduce((acc,curr)=>{
    console.log(acc+" * "+curr+" = ");
    return curr*acc;
},1);
console.log(product);
let nums=[1,5,8,3,5,78,655,88,35];
const max=nums.reduce((acc,curr)=>{
    if(acc<curr)
    return curr;
else
return acc;
},0);
console.log(max);