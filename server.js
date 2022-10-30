const express = require('express')
const morgan = require("morgan");
const PORT = 3000
const app = require("liquid-express-views")(express());


/////////////////////////////////////////////////////
/// Middleware
/////////////////////////////////////////////////////
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))





/////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////

app.get('/', function(req, res){
    async function getData(url = '') {
        const response = await fetch(url).then((apiResponse) => {
            return apiResponse.json()   
        })
        .catch((error) => {
            console.log(error)
        })
        console.log(response)
        let occupations = response.occupations
        let states = response.states
        res.render('creation',{occupations,states})
    }
    getData('https://frontend-take-home.fetchrewards.com/form')
})


app.post('/create', async (req, res)=>{
    console.log(req.body)
    let data = req.body
    const response = await fetch('https://frontend-take-home.fetchrewards.com/form', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
      body: JSON.stringify(data) 
    })
    .then((apiResponse) => {
        return apiResponse.json()
    })
    .catch((error) => {
        console.log(error);
        response.json({ error });
    })
    console.log(response)
    res.render('confirmation',{response})
    // res.redirect('/confirmation')
})





app.listen(PORT, () => {
    console.log(`Port is listening on ${PORT}`)
})




// async function postData(url = '', data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: 'POST', // *GET, POST, PUT, DELETE, etc.
//       body: JSON.stringify(data) 
//     });
//     return response.json(); // parses JSON response into native JavaScript objects
//   }
  
//   postData('https://frontend-take-home.fetchrewards.com/form', data)
//     .then((data) => {
//       console.log(data); // JSON data parsed by `data.json()` call
//     });


     //   https://frontend-take-home.fetchrewards.com/form