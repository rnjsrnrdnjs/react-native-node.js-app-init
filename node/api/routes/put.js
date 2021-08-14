const express=require('express');
const router=express.Router();

module.exports=(app)=>{
	app.use('/put',router);
	
}
