function checkIn(str,obj){
 return str in obj;
};
let person={
    name:'Alex',
    age:23,
    location:'UK'
}
console.log(checkIn('name',person));
console.log(checkIn('surname',person));