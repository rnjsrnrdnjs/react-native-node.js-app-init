const { sequelize } = require('../models');

module.exports = async() => {
	sequelize
		.sync({ force: false })
		.then(() => {
			console.log('database connecting success');
		})
		.catch((err) => {
			console.error(err);
		});
};
