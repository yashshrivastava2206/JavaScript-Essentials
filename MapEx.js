let num=[2,3,4,5,6];
const nums=num.map(function(element){
    return element+1;
});
const nums1=num.map((element)=>(element*2));
const multipleNumber=(num)=>{
    return num*3;
};
const nums2=num.map(function(element){
    return multipleNumber(element,3);
});
console.log(num);
console.log(nums);
console.log(nums1);
console.log(nums2);


const name=["Yash","Nishu","Aman","Jai",];
const names=name.map((element)=>"<p>"+element+"</p>");
console.log(names);
let maxLen =4;
const maxName=name.map((element)=>{
    if(element.length<=maxLen)
    return element;
    else 
    return element.substring(0,maxLen);
});
console.log(maxName);


let fullName=["Yash Shrivastava","Aman Shrivastava","Sejal Shrivastava","Jai Shrivastava"];
const NamesJSON=fullName.map((element)=>{
    return {firstName:element.substring(0,element.indexOf(" ")),lastName:element.substring(element.indexOf(" ")+1),};
});
console.log(NamesJSON);