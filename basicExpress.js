const express=require('express');
const app=express();


app.get('',(req,res)=>{
 console.log("Data sent by browser: ",req.query.name);
 res.send('Hello, this is Home Page'+req.query.name);

res.send("<h1> Welcome to home page:</h1>");

res.send(
    `
    <h1>Welcome to home page.</h1>
    <a href="/about"> Go to about Page</a>
    `
    );




});

app.get('/about',(req,res)=>{
    //res.send('Hello, this is About Page');
    res.send(
        `
        <input type="text" placeholder="user Name" value="${req.query.name} "/>
        <button>Click me</button>
        <a href="/"> Go to Home Page</a>
        `
    );
});


app.get('/help',(req,res)=>{
    res.send({
        name:"Ambuj",
        email:"Ambujp863@gmail.com"
    });
});

app.get('/login',(req,res)=>{
    res.send('Hello, this is login Page');
});


app.listen(5000);
