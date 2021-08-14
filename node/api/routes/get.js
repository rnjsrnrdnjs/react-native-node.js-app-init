const express=require('express');
const router=express.Router();

module.exports=(app)=>{
	app.use('/',router);
	router.use((req,res,next)=>{
	/* res.locals 값추가 가능*/
		next();
	});

	router.get('/public', (req, res, next) => {
		res.status(200).json({ message: "here is your public resource" });
	});
	router.get('/',(req,res,next)=>{
		res.status(404).json({error : "page not found"});
	});
}

