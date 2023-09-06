// 
let personArray=[
    {name:"Mary",city:"London"},
    {name:"Anita",city:"Paris" },
    {name:"Edward",city:"New York"},
    {name:"Thomas",city:"Rome"},
    {name:"Robin",city:"Seattle"},
    {name:"Sophia",city:"Los Angeles"},
    {name:"Bruce",city:"Delhi"},
];
let continentArray=[
    {city:"London",continent:"Europe"},
    {city:"Delhi",continent:"Asia"},
    {city:"Seattle",continent:"North America"},
    {city:"Paris",continent:"Europe"},
    {city:"New York",continent:" North America"},
    {city:"Rome",continent:"Europe"},
    {city:"Bengaluru",continent:"Asia"},
    {city:"Los Angeles",continent:"North America"},
];
let continent="Asia";
function checkContinent(personArray,continentArray,conti){
    let check=continentArray.filter((continentArray)=> continentArray.continent===conti);
    console.log(check);
    let checkName=check.filter((check)=>personArray.city===check.city);
    console.log(checkName);
    return checkName;
}
console.log(checkContinent(personArray,continentArray,continent));