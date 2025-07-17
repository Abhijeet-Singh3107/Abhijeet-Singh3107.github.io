import express, { response } from 'express';

const app = express();

app.listen(8080,() => {
    console.log("Server Started...");
})

// app.get("/", (req,res) => {
//     res.send("Learning express");
// });

// app.get("/products", (req,res) => {
//     // res.send("Product list...");
//     res.send({id:1, name:"Product 1", price: 25});
// });

// app.get("/user", (req,res) => {
//     res.send("User name...");
// });

// app.get("/ab*cd", (req,res) => { //any url will word starting with ab and ending with cd (http://localhost:8080/abwertycd)
//     res.send("Hello");
// })
   
    // localhost:8080/name
// app.get("/name",(req,res) => {
//     res.send("Good morning...");
// })

    // localhost:8080/name
// app.get("/:name",(req,res) => {     // here name is a variable and we can pass anything as parameter
//     // res.send("Good morning...");
    // res.send(req.params.name);       //localhost:8080/john
// });

// app.get("/name/:name", (req,res) => {
//     res.send(req.params.name);      //localhost:8080/name/john
// })

// app.get("/:name/:age", (req,res) => {
//     res.send(req.params.name + " " + req.params.age);      //localhost:8080/john/21
// })

// app.get("/name/:name/age/:age", (req,res) => {
//     res.send(req.params.name + " " + req.params.age);      //localhost:8080/name/john/age/21
// })

// app.get("/" , (req,res) => {
//     res.send(res.header);
// })

// app.get("/" , (req,res) => {
//     res.send(res.header.authorization);
// })

// app.get("/", (req,res) => {
//     res.send(req.query.name);      // localhost:8080/?name=Abx
// })

// app.get("/", (req,res) => {
//     res.send(req.query.name + " " + req.query.age);      //localhost:8080/?name=Abx&age=22
// })

app.get("/",(req,res) => {
    res.send("Get Request");
})

app.post("/",(req,res) => {
    res.send("Post Request");
})

