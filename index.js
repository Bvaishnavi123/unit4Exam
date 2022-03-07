let express = require("express")
let app = express();
app.use(logger)
app.get("/books",function(req,res) {
    res.send({route:"/books",})
})

app.get("/libraries",checkPermission("libraries"),function(req,res) {
    res.send({ route: "/libraries", permission: true})
})

app.get("/authors",checkPermission("authors"),function(req,res) {
    res.send( { route: "/authors", permission : true})
})

function logger(req,res,next)
{
   console.log(req.path)
   next()
}

function checkPermission(role)
{
    return function(req, res, next){
        if(role=="authors"){
            if(req.path == "/authors")
            {
              return next()
                // res.send({ route: "/authors", permission : true})
            }
        }
        if(role=="libraries"){
            if(req.path == "/libraries")
            {
              return next()
                // res.send({ route: "/authors", permission : true})
            }
        }
        else{

            res.send("Not For The Other People")
        }
    }
}




app.listen(4520,()=>{
    console.log("listening on port 4520")
})