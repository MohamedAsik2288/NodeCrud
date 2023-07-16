const express =require('express');
const path =require('path');
const redditData =require('./data.json');
const app =express();

//  public folder =static files
app.use(express.static(path.join(__dirname,'/public')));



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))

//  create a get api to load home template

app.get('/',(req,res)=> {
        res.render('home');
})

app.get ('/fetch-random',(req,res)=> {
        const  num =Math.floor(Math.random()*10+1)

        res.render('random',{num});
})

app.get('/r/:subreddit',(req,res)=> {
        const {subreddit} =req.params;
        const data =redditData[subreddit];
        let title= subreddit;
        if(data){
                res.render('sbreddit',{...data,title});
        }else{
                res.render('notfound',{subreddit})
        }

})


app.get('/cats',(req,res)=> {
        const catList = ['Luna','Tom','Jerry','Norris'];
        let title ='CATS';
        res.render('cats',{catList,title});
})

app.get('/dogs',(req,res)=> {
        const dogList =['HarryPotter','Sridar','Peter','Dom'];
        let title ='DOGS'
        res.render('dogs',{dogList,title})
});


app.listen(5000,()=> {
        console.log("STARTED SERVER ON PORT 5000 ");
})