

let str="Shrivastava";
console.log(str[0]);
str=["Yash","Shrivastava"];
console.log(str[0][0]);
let s="yash";
let doubled="";
for(let i=0;i<s.length;i++){
    doubled+=s[i]+s[i];
}
console.log(doubled);

function greeting(stName,greet){
    console.log("Hello "+greet+" "+stName);
}
greeting("Yash","Good Morning");

function sqaure(num){
    return num*num;
}
const sqr=(num)=>{
    return num*num;
}
console.log(sqaure(2));
console.log(sqr(10));
let arr=['One','Two','Three'];
console.log(arr);
arr.push('Four');
console.log(arr);
arr.unshift('Zero');
console.log(arr);
arr.pop();
console.log(arr);;
arr.shift();
console.log(arr);

//Splice
let remArr=arr.splice(0,1);
console.log(arr);
console.log(remArr);


arr1=['One','Two','Three'];
arr2=['Ten','Nine','Eight'];
console.log(arr1);
console.log(arr2);
arrC=arr1.concat(arr2);
console.log(arrC);


for(let i=0;i<arrC.length;i++){
    if(arrC[i]=="One"){
        arrC.splice(i+1,0,'Four','Five');
        break;
    }
}
let JSON={
    name:"Yash Shrivastava",
    age:24,
    city: "Jhansi",
};
console.log(arrC);
console.log(JSON);
console.log(JSON['name']);
console.log(JSON.name);
JSON.name="Yash";
console.log(JSON.name);
function checkB(str){
    
}