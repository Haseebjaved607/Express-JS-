<<<<<<< HEAD

//
//if we want to terminate the fuction or don't want to use the next middleware we will give the responce over here and don't use the next() function .

const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 5000;
//it is midleware we use it as a plugin  here. express cannot understand ths type of data so we use midleware to store data in good form
app.use(express.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//     console.log('hello from middleware 1')
//     fs.appendFile("log.txt", `\n${Date.now()}:${req.method}: ${req.ip}:${req.path}`, (error, data) => {
//         next()
//     })
//     next();
// })
// app.use((req, res, next) => {
//     try {
//         // console.log('helo from 2 middleware')
//         res.end(users);
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

app.get("/api/users" , (req , res)=>{
    // console.log(req.headers)

    //always use X to make custom headers
    res.setHeader("X-name","haseeb javed") //custom headers
    res.json(users)
})

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
app.post("/api/users/", (req, res) => {
    try {
        const body = req.body
        users.push({ ...body, id: users.length + 1 })
        //to append the file or to add data in the designated file
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
            return res.json({ status: "success", id: users.length });

        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }

    // console.log(body)

});
app.get("/api/users/", (req, res) => {
    try {
        res.json(users)

    } catch (error) {

    }
})



app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
=======

//Headers 
//if we want to terminate the fuction or don't want to use the next middleware we will give the responce over here and don't use the next() function .

const express = require("express");
const fs = require("fs")
const users = require("./MOCK_DATA.json")

const app = express();
const PORT = 5000;
//it is midleware we use it as a plugin  here. express cannot understand ths type of data so we use midleware to store data in good form
app.use(express.urlencoded({ extended: true }))

// app.use((req, res, next) => {
//     console.log('hello from middleware 1')
//     fs.appendFile("log.txt", `\n${Date.now()}:${req.method}: ${req.ip}:${req.path}`, (error, data) => {
//         next()
//     })
//     next();
// })
// app.use((req, res, next) => {
//     try {
//         // console.log('helo from 2 middleware')
//         res.end(users);
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

app.get("/api/users" , (req , res)=>{
    // console.log(req.headers)

    //always use X to make custom headers
    res.setHeader("X-name","haseeb javed") //custom headers
    res.json(users)
})

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
app.post("/api/users/", (req, res) => {
    try {
        const body = req.body
        users.push({ ...body, id: users.length + 1 })
        //to append the file or to add data in the designated file
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (error, data) => {
            return res.json({ status: "success", id: users.length });

        })
    } catch (error) {
        res.json({
            message: error.message
        })
    }

    // console.log(body)

});
app.get("/api/users/", (req, res) => {
    try {
        res.json(users)

    } catch (error) {

    }
})



app.listen(PORT, () => console.log(`Server started at port ${PORT}`))
>>>>>>> eabb2060aef6aca96b8da23a48d2c54ab4e67050
