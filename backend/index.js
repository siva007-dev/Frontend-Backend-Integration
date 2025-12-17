import express from "express"

const app=express()

var username="siva"
var password="123"


app.get("/name",function(req,res)
{
    if(req.query.username==username & req.query.password== password)
        {
    res.send("Login sucssesfull")
    }
    else{
        res.send("login failed")
    }
})

export default app

//  app.listen(3000,function(){
//     console.log("server started....")
// })