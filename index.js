let express = require("express")
let app = express();
app.use(logger)
app.get("/books",function(req,res) {
    res.send({route:"/books",})
})

app.get("/libraries",checkPermission,function(req,res) {
    res.send({ route: "/libraries", permission: true})
})

app.get("/authors",checkPermission,function(req,res) {
    res.send( { route: "/authors", permission:true})
})

function logger(req,res,next)
{
   console.log(req.path)
   next()
}

function checkPermission(req,res, next)
{
    if(req.path == "libraries")
    {
       return req.permission = "true"
    }
    if(req.path == "authors")
    {
        return req.permission = "true"
    }
    next()
}



app.listen(4520,()=>{
    console.log("listening on port 4520")
})