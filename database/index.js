const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sqlite://localhost/:memory:');
const modelPaths = fs.readdirSync(path.join(__dirname, 'models'));
const has = (target, key) => Object.prototype.hasOwnProperty.call(target, key);
const models = {};
const setModels = async () => {
	for (const modelPath of modelPaths) {
		const { name, model, sync } = require(path.join(__dirname, 'models', modelPath))(Sequelize, sequelize);
	
		if (!has(models, name)) {
			models[name] = model;
			await sync();
		}
	}
};

module.exports = async () => {
	await setModels();
	return models;
};
