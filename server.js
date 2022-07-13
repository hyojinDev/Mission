const express = require('express');
const app = express();
const middleware = require('./middleware/index.js');
const getRouter = require('./router/index.js');
const server = () => {
	app.listen(3000, () => {
		console.log('Server started');
	});
};

middleware(app);
getRouter().then(router => {
	app.use(router);
	server();
});
