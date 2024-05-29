// import express from "express";
// import users from "./MOCK_DATA.json";

const express = require("express"); 
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 8000;

app.get("/users" , (req , res )=> {
    const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name }</li>`).join("")}
    </ul> 
    `;
    
    res.send(html)
});

// get patch and delete can use same route because they can be change by id 
app.route("/api/user/:id")
.get ((req , res) =>{
    try {// console.log(id)
        const id = Number(req.params.id);
        const user = users.find((user) =>user.id === id);
        return res.json(user)
        
    } catch (error) {
        console.log(error.message)
        res.json({
            message:error.message
        })
        
    }
})

.patch((req , res) =>{
    // console.log(id)const id = Number(req.params.id);
    const user = users.find((user ) =>user.id === id);
    return res.json(user);
    
})
.delete((req , res) =>{
    // console.log(id)
    const id = Number(req.params.id);
    const user = users.find((user ) =>user.id === id);
    return res.json(user)

})

//post has seperate route
app.post("/api/users/:id" ,(req , res) =>{
    return res.json({ status : "panding"})
});



app.listen( PORT , () => console.log(`Server started at port ${PORT}`))