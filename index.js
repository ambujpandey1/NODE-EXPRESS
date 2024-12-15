const express=require('express');
const app=express();
const path=require('path');
const publicPath=path.join(__dirname,'Public'); // Public Folder __dirname=> current directory
console.log(publicPath);

app.use(express.static(publicPath)); // this gives with extension of file


const reqFilter=require('./middelware');
const exp = require('constants');
const rout=express.Router();  // use in replace of app.get=> rout.get
// check age is greater then 18 then acces the websiites
// for accesing on localhost     http://localhost:7000/?age=18
const reqFilter=(req,rep,next)=>{
    // console.log('reqFilter');
    if(!req.query.age){
     rep.send("Pleas Provide age")
    }
    else if(req.query.age<18){
        rep.send("You can not acces this page");
    }
    else{
        next();
    }
     next();
 }
 app.use(reqFilter);




app.get('',reqFilter,(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',reqFilter,(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})


app.get('/*',(req,res)=>{
    res.sendFile(`${publicPath}/NoPage.html`)
})

 







// for  views folder
app.set('view engine','ejs');

app.get('/profile',(_,res)=>{
    const user={
        name:'Ambuj Pandey',
        email:'ambujp863@gmail.com',
        city:'noida',
        skills:['php','js','c++','java','node']
    }
    res.render('profile',{user});  // ejs files profile.ejs
})


app.get('/login',(_,res)=>{
    res.render('login');
})



app.listen(7000);