// createFile
// appendFile
// readFile
// renameFile
// unlinkFile

// createFile
// const fs = require('node:fs');

// fs.writeFile(<file name enclosed in "">, <"data to be inserted in the file">, function())

// writeFile
// fs.writeFile("hello.txt", "HELLO HOW ARE YOU??", function(err){
//     if(err) console.log("Error: ", err)
//         else console.log("File created successfully");
// })

// appendFile
// fs.appendFile("hello.txt", "\nasi change tuc daso!!", function(err){
//     if(err) console.log("Error: ", err)
//         else console.log("File updated successfully");
// })

// // readFile
// fs.readFile("hello.txt", "utf-8", (err, data) =>{
//     if(err) console.log("Error: ", err)
//         else console.log("File data: ", data);
// })

// // 
// const greet = require('./greet');
// console.log(greet("Chacha"));


// ----------------- Express.js ----------------
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });


//
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use((req, res, next) => {
  console.log("HAHAHAHAH")
  next();
})

// app.get(route, routeMiddleware, callback)

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Profile route
app.get('/profile', (req, res) => {
  res.json("Huiiiii");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Mock API for user management
const users = [
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
  { id: 3, name: "Charlie", email: "charlie@email.com" }
];

// Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

// Create new user (mock, does not persist)
app.use(express.json());
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});