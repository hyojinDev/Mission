const { fetch } = require('../../businessLogicLayer/index.js');
const logic = async (...args) => {
    await fetch(...args)
};

module.exports = models => {
    const getMainFunction = models => {
        return async (...args) => {
            await logic(models, ...args);
        };
    };
    return {
        method: 'get',
        url: '/api/fetchProblem',
        func: getMainFunction(models),
    };
};
