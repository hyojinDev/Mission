const fs = require('fs');
const path = require('path');
const db = require('../database/index.js');
const express = require('express');
const router = express.Router();
const routes = fs.readdirSync(path.join(__dirname, 'routes'));
const setRouters = async () => {
	const models = await db();
	for (const route of routes) {
		const { method, url, func } = require(path.join(__dirname, 'routes', route))(models);
		router[method](url, func);
	}
};

module.exports = async () => {
	await setRouters();
	return router;
};
