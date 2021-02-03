const age1=[12,34,23,21,22];
const age2=[32,24,23,21,22];
const age3=[29,20,19,17,16];
const allAge=age1.concat(age2);
//allAge2 is the best way to add another array 
const allAge2=[...age1,...age2,...age3];
console.log(allAge2);

////array max
let findOutMax=[323,23,33,9090];
let result=Math.max(...findOutMax);
console.log(result);