import express from 'express';
import apiRouter from './api'

const app=express();
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.render('index',{
        content:'<h4>cccccccc</h4>'
    });
});
app.set('view engine','ejs');
app.use('/api',apiRouter);
app.use(express.static('public'));






app.listen(port,()=>{
    console.log(`Listen to port ${port}`);
})

