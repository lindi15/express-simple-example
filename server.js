const express = require("express");
const cors = require('cors')
const app = express();
const port = 4300;

app.use(cors());
app.use(express.json());


app.get('/',(req,res)=>{
    res.status(200).send("hello world")
})
app.post('/',(req,res)=>{
    
    const {name,name2,message}=req.body;
    res.status(200).send({msg:`${name} ${message} ${name2} very very much`});
} )

app.listen(port,()=>console.log(`server runningon port : ${port}`))
