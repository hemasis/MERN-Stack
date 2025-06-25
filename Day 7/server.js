// createing a simple HTTP server using Node.js
// const httpChild = require('http')

// const server = httpChild.createServer((req, res) => {
//     res.end("Hello from Express!")
// })

// server.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000')
// })



// Creating a simple HTTP server using Express.js
const express = require('express');
const app = express()
const axios = require('axios');

app.get('/', (req, res) => {
    res.send('Hello from Express!')
})

app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch 😥' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

