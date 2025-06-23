// ---------------map()--------------------
const nums = [1, 2, 3, 4];
const multiple = nums.map(num => num * 2);


// ------------filter()--------------------

const scores = [33, 50, 75, 22, 90];
const passed = scores.filter(score => score >= 40);
console.log(passed);


// ------------reduce()--------------------
const a = [1,2,3];
const res = a.reduce((a,b) => a+b);
console.log(res); 


// ------------ template literals --------------------
var person = "Man";
console.log("hello " + "Hanu" + person);  //undefined

console.log(`hello mister ${person}`);

// hello my name is ....... and my age is .....

// -----------------------------------------------------
console.log(2);
console.log("Man");
setTimeout(() => console.log("Hello"), 0);
console.log(1);
console.log("ok");


