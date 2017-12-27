import config from './config';
import express from 'express';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
//import serverRender from './serverRender';

const app=express();
const port = config.port;

app.use(sassMiddleware({
	
	src:path.join(__dirname,'sass'),
	dest:path.join(__dirname,'public')
}))



app.get('/',(req,res)=>{
	//serverRender()
	//.then(content=>{
	//	res.render('index',{content});
	//})
	//.catch(err=>console.log(err));
	
	res.render('index',{content:'sssss'});
	
});
app.set('view engine','ejs');
app.use('/api',apiRouter);
app.use(express.static('public'));






app.listen(port,()=>{
    console.log(`Listen to port ${port}`);
})

