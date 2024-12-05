const express = require('express');
const app = express()
const path = require('path');
const port = 3000
// const ip = '175.85.104.83'
const ip = ""
const fs = require("fs"); 
const { get } = require('http');
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))


app.listen(port, ()=>{
    console.log(`App listenting in localhost port ${ip,':',port}`)
})


app.get('/',(req,res)=>{
    console.log("WELCOME TO HOMEPAGE...")
    console.log(process.cwd())
    res.render('index.ejs',{content:"HOME"})
})



app.get('/pathparameter/:pathparams',(req,res)=>{
    pathparams =req.params['pathparams']
    res.send(`Your path parameter is ${pathparams}`)
})

// VALID PATH PARAMETER PATTERN
// app.get('/pathparameter/:pathparams/anotherpathname/:anotherpathparams',(req,res)=>{
//     res.send('PATH PARAMETER SAMPLE')
// })

// SAMPLE QUERY STRING
app.get('/search/',(req,res)=>{
    const { q } = req.query;
    res.send(`You searched for ${q}`)
})


app.get('/contacts',(req,res)=>{
    console.log("WELCOME TO ABOUTPAGE...")
    res.render('contacts.ejs',{content:"CONTACTS"})
})



app.get('/about',(req,res)=>{
    content = {
        page_description: "About Page"
    }

    function readLoremFile(){
        return new Promise((resolve,reject)=>{
            fs.readFile("lorem.json", function(err, data) {
                if (err) {
                    return reject(err); // Reject in case of error
                }
                const lorem = JSON.parse(data); // Parse the data
                resolve(lorem); // Resolve with the data
            });
        })
    }
    readLoremFile()
    .then(lorem => {
        // Use lorem here outside of the readFile callback
        console.log("lorem file load successfully");
        content = {
            page_description: "About Page",
            lorem_collections: lorem
        }
    
        res.render('about.ejs', { content:content } )
    })
    .catch(err => {
        console.error(err);
        res.render('about.ejs', { content:content } )
    });

})


app.get(/(.*)/, (req, res) => {
    res.send("PAGE NOT FOUND")
})