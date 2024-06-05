//middle ware
//if we want to terminate the fuction or don't want to use the next middleware we will give the responce over here and don't use the next() function .

// const express = require("express");
// const fs = require("fs")
// const users = require("./MOCK_DATA.json")
import fs from "fs"
import express from "express"
// import users from "./MOCK_DATA.json"
import connectDb from "./config/db.js";
import userModel from "./models/usersSchema.js";

const app = express();
const PORT = 5000;
connectDb()
//it is midleware we use it as a plugin  here. express cannot understand ths type of data so we use midleware to store data in good form
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app.use((req, res, next) => {
//     // console.log('hello from middleware 1')
//     fs.appendFile("log.txt", `\n${Date.now()}:${req.method}: ${req.ip}:${req.path}`, (error, data) => {
//         next()
//     })
//     next();
// })
// app.use((req, res, next) => {
//     try {
//         console.log('helo from 2 middleware')
//         // res.end("hey");
//     } catch (error) {
//         res.json({
//             message: error.message
//         })
//     }

// })

app.get("/users", (req, res) => {
    const html = `
    <ol>
    ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ol> 
    `;

    res.send(html)
});

// get patch and delete can use same route because they can be change by id 
app
    .route("/api/users/:id")
    .get((req, res) => {
        try {// console.log(id) // to chech the id in console
            const id = Number(req.params.id);
            const user = users.find((user) => user.id === id);
            return res.json(user)

        } catch (error) {
            console.log(error.message)
            res.json({
                message: error.message
            })

        }
    })

    .patch((req, res) => {
        // console.log(id)const id = Number(req.params.id);
        return res.json({ status: "pending" })
        // return res.json(user);

    })
    .delete((req, res) => {
        // console.log(id)
        // console.log(req.params)
        // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
        // return res.json({ status: "panding", id: users.length });
        // })
        return res.json({ status: " deleted" })


    });

//post has seperate route
app.post("/api/users/", async(req, res) => {
    try {
        const { firstName, lastName, gender, email } = req.body
        if (!firstName || !lastName ||!gender ||!email) {
            return res.status(400).json({
                message:"all fields are required"
            })
        }
        const obj = {
            firstName,
            lastName,
            gender,
            email,

        }
        const userData = await userModel.create(obj)
        console.log(userData)

    } catch (error) {
        res.json({
            message: error.message
        })
    }

    // console.log(body)

});
app.get("/api/users/", (req, res) => {
    try {
        res.json({
            users
        })
    } catch (error) {

    }
})



app.listen(PORT, () => console.log(`Server started at port ${PORT}`))