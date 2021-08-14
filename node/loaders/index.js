const expressLoader=require('./express');
const sequelizeLoader=require('./sequelize');

module.exports=async (app)=>{
	
	await sequelizeLoader();
	await expressLoader(app);
};

