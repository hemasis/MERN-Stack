let marks = 85;
if(marks < 90){
    console.log("Excellent");
}

// *********************** IF-ELSE ***********************

let weather = "rainy";
if(weather == "rainy"){
    console.log("It's a beautiful day!");
} else {
    console.log("It's too hot today!");
}


// *********************** IF-ELSE IF ***********************

let light = "yellow";
if(light == "green"){
    console.log("You can go now!");
} else if(light == "yellow"){
    console.log("Get ready to go!");
} else if(light == "red"){
    console.log("You must stop!");
} else {
    console.log("Light is not working");
}


// if marks above 80 it's A grade, above 70 it's B grade, above 60 it's C grade, otherwise it's D grade
let marks2 = 76;
if(marks2 > 80)
{
    console.log("A grade");
} else if(marks2 > 70) {
    console.log("B grade");
} else if(marks2 > 60) {
    console.log("C grade");
} else {
    console.log("D grade");
}


// *********************** SWITCH STATEMENT ***********************

let option = 2;
switch(option) {
    case 1:
        console.log("Music");
        break;
    case 2:
        console.log("Movies");
        break;
    case 3:
        console.log("Games");
        break;
    default:
        console.log("Invalid Option");
}


// *********************** FOR LOOP ***********************

for(let i = 1; i <= 5; i++) 
{
    console.log("Number:", i);
}


// *********************** WHILE LOOP ***********************

let count = 5;
while(count <= 10)
{
    console.log(count);
    count++;
}

// *********************** DO-WHILE LOOP ***********************
let i = 1;
do {
    console.log("Number: ", i);
    i++;
} while(i >= 5);


// WAP to print numbers 1 to 10 using for loop
for(let k = 1; k <= 10; k++) 
{
    console.log(k);
}


// ************************ JUMP STATEMENTS (BREAK and CONTINUE) ************************
// Break: Stops the loop immediately when a condition is met

for(let i = 1; i <= 10; i++)
    {
    if(i == 5)
    {
        console.log("Breaking at 5");
        break; // Stops the loop when i is 5
    }
}


// Continue: Skips the current iteration and continues the loop
for(let i=1; i<=5; i++)
{
    if(i==3)
    {
        continue;
    }
    console.log("Number: ", i); // it will skip printing 3
}


// WAP if it's Sunday, don't study. If not Sunday study 3 subjects using loop
let day = "Monday";
if(day == "Sunday") {
        console.log("it's Sunday. Don't study today!");
    }
    else 
    {
        for(let i=1; i<=3; i++)
        {
            console.log("Study subject", i);
        }
    }
        
// switch(day)
// {
//     case "Sunday":
//         console.log("It's Sunday. Don't study today!");
//         break;
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//     case "Saturday":
//         console.log("Study 3 subjects today!");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }



// ************************ FUNCTIONS ************************

function greet(name)
{
    console.log("Hello, " + name + "!");
}
greet("Hemasis");

// WAP to print sum of two numbers using function
function add(a, b)
{
    console.log("Sum is",a+b);
}
add(5,3)

// WAP to print sum of 5 nos using function
function sum(a,b,c,d,e)
{
    console.log("Sum of these 5 nos =", a + b + c + d + e);
}
sum(1, 2, 3, 4, 5);


// What is hoisting? **** INTERVIEW QUESTION ****


// ******************** SCOPE ********************
// Scope: where variable can be accessed or used in your code - inside or outside a function or block

let college = "LPU";
function myClass() {
    let subject = "MERN";
    console.log("College: ", college);
    console.log("Subject: ", subject);
}

myClass();
// console.log(subject);

// Block Scope
// {
//     let pencil = "apsara";
//     console.log(pencil);
    
// }

// console.log(pencil);


// Closures: When a fn remembers the variables from its outer fn even after outer has finished executing
function outer()
{
    let name = "Hemasis";

    function inner()
    {
        console.log("Hello, " + name + "!");
    }
    return inner;
}
outer();

let greetFunc = outer();
greetFunc();


function createCounter()
{
    let count = 0;

    return function() 
    {
        count++;
        console.log("Current Count: ",count);
    }
}

let counter = createCounter();
counter();
counter();




// ******************** SIMPLE CALCULATOR ********************
function calculator(num1, num2, operation) {
    let res;
    switch(operation) {
        case "add":
            res = num1 + num2;
            break;
        case "subtract":
            res = num1 - num2;
            break;
        case "multiply":
            res = num1 * num2;
            break;
        case "divide":
            res = num1 / num2;
            break;
        default:
            res = "Invalid operation";
    }
    console.log("Result:", res);
}
calculator(10, 5, "add"); 
calculator(10, 5, "subtract"); 
calculator(10, 5, "multiply"); 
calculator(10, 5, "divide"); 



// Practice Questions
function test() {
    return(
        2+2
    );
}
console.log(test()); 

let x = null;
console.log(typeof (x)); 
console.log(typeof x); 
