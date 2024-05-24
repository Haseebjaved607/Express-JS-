
//we don't have to require http in express js 
// const http = require("http")
const fs = require("fs");

const express = require("express")

const app = express();

// const userData = `${Date.now()}: ${req.method} :${req.url} new request recived \n`;

// fs.appendFile("userRecord.txt", userData, (err, data) => {
    app.use((req, res, next) => {
        const userData = `${Date.now()}: ${req.method} :${req.url} new request received \n`;
    
        fs.appendFile("userRecord.txt", userData, (err) => {
            if (err) {
                console.error("Error writing to file", err);
            }
        });
        next();
    });

    app.get('/', (req, res) => {
        // return res.send("hello from home page" + 'hey' + req.query.name)
        return res.send('hey' + req.query.name)
    });
    app.get('/about', (req, res) => {
        return res.send("hello from about page  " + 'hey' + req.query.name + 'and your age is ' + req.query.age)
    });
// });
//using express js this is the shoter code
app.listen(5000, () => console.log("hello from sever"))

//this was before express js
// const myServer = http.createServer(app);

// myServer.listen(5000 , ()=> console.log("hello from sever"))