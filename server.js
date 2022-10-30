const express = require('express')
const morgan = require("morgan");
const app = express()
const PORT = 3000

app.get('/get', (req, res) => {
    res.send('<h1>hello hellodddd</h1>')
})
app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`)
})


let data = {
    name: 'myname',
    email: 'name@email.com',
    password: 'password',
    occupation: 'occupation',
    state: 'state',
}


async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      body: JSON.stringify(data) 
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://frontend-take-home.fetchrewards.com/form', data)
    .then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });


     //   https://frontend-take-home.fetchrewards.com/form