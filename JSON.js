let employee=[{
    name: 'Prathit',
    age: 23,
    DOB: '20-12-23',
    experience: 4,
    salary: 12000,
},
{
    name: 'Pulkith',
    age: 25,
    DOB: '20-12-23',
    experience: 7,
    salary: 12000,
},
{
    name: 'Aman',
    age: 23,
    DOB: '20-12-23',
    experience: 4,
    salary: 12000,
},
];
console.log(employee);
let obj={
    name:'Vikash',
    age: 22,
    DOB: '20-12-23',
    experience: 2,
    salary: 10000,
}
employee.push(obj);
console.log(employee);
let totalSalary=0;
for(let i=0;i<employee.length;i++){
    employee[i].wfh='Yes';
    console.log(employee[i].salary);
    totalSalary+=employee[i].salary;
}
console.log(totalSalary);
console.log(employee);
let company={
    name:'Capgimini',
    location:'Paris',
    employees: employee,
};
console.log(company);