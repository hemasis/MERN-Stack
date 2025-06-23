// var a = "Hemasis", 9, "Alex"
let a = ["Hemasis", "Alex"]
// console.log(a);.\


// ********************* Traversal of Array ***********************

var myfriends = ['Akash', "Kamal", "Krishna", "Anirudh"]
console.log(myfriends);
// console.log(myfriends[4]);
// console.log(myfriends.length);

// ********************** Searching ************************

/* indexOf, lastIndexOf, includes */
var myfriends = ['Akash', "Kamal", "Krishna", "Anirudh", "Kamal"]
console.log(myfriends.indexOf("Kamal", 2)); 
console.log(myfriends.lastIndexOf("Kamal",3));
console.log(myfriends.includes("Nayyum")); // this will return true / false
console.log(myfriends.indexOf("Nayyum")); //this will return the index if found or -1 if not found


// ********************** Sort ************************
let months = ["March", "Jan", "Feb", "April", "Dec", "Nov"]
let num = [5,3,7,1,9, 12, 51, 1000, 44]
console.log(num.sort()); // this will sort the numbers in ascending order

console.log(months.sort());

// ***************************** CRUD (Create, Read, Update, Delete) ******************************

// -------- Object --------
let student = {
    name: "Hemasis",
    age: 21,
    course: "B.Tech"
}
console.log(student.valueOf()); // this will return the object
console.log(Object.keys(student)); // this will return the keys of the object
console.log(Object.values(student)); // this will return the values of the object

// -------- Destructuring --------

// Array Destructuring
const myBioData = ["Hemasis", 21, "Student"]
let [myName, myAge, myProfession] = myBioData;
console.log(myAge);

// Object Destructuring
const myData = {
    myName: "Alex",
    myAge: 22,
    myProfession: "Engineer"
}
console.log(myData.myProfession);


// *************************** ES6 Features: Arrow Functions, Promises, Async/Await **************************

// ------------ Traditional way ---------------
function add(a,b) {
    console.log(a+b);
}

// ------------ Arrow Functions ---------------
const Add = (a, b) => {
    console.log(a + b);
}
Add(6,2);


// WAP to print nos from 1 to 5 using arrow function
const printnum = (j, k) => {
    let count = 0
    for(let i = j; i<=k; i++) {
        count++;
        console.log("Number", count, "is", i);
    }
}
printnum(5,10);


// ------------ Promises ---------------
let success = true; 
let promise = new Promise((resolve, reject) => {
    if (success) {
        console.log("Success!!");
        resolve("Successful!");
    } else {
        reject("Failed!!");
    }
});

promise
    .then(result => {
        console.log("Resolved with:", result);
    })
    .catch(error => {
        console.error("Rejected with:", error);
    });


// Pending
// Fulfilled
// Rejected

// ------------
let playMovie = new Promise((resolve, reject) => {
    let internetworking = true;

    if(internetworking) {
        resolve("Movie is playing");
    } else {
        reject("No internet connection");
    }
})


// ------------------------------------------
promise.then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
})



// ------------------------------------------
// Async/Await

async function fetchData() {
    try{
        let response = fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchData();


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     console.log(data[1].email);
// })
// .catch(error => console.error('Something went wrong: ',error))
// })


// --------------- Working wth JSON ----------------

const stud = {
    name: "Anshul",
    age: "20"
}

// Convert object to JSON 
const jsonString = JSON.stringify(stud);
console.log(jsonString);


// JSON to Object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

