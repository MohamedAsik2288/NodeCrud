const express =require('express');
const app =express();


app.use(express.urlencoded({extended:true}));


app.get('/tacos',(req,res)=> {
    res.send("This is a Get Request");
})


app.post('/tacos',(req,res)=> {
    const {icecream,price}= req.body;

    res.send(`This Post Request Form is Successfully Done using Rest Api with Icecram Flavour as ${icecream} and price${price}`);
})
app.listen(3000,()=> {
    
    console.log('Server Started ');
})