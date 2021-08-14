const express=require('express');
const router=express.Router();

const get=require('./routes/get');
const post=require('./routes/post');
const del=require('./routes/delete');
const put=require('./routes/put');

module.exports=()=>{
	get(router);
	post(router);
	del(router);
	put(router);
	return router;
}