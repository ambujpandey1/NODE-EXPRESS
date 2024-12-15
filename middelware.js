module.export=reqFilter=(req,rep,next)=>{
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
