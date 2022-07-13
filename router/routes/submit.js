const { submit } = require('../../businessLogicLayer/index.js');
const logic = async (...args) => {
    await submit(...args)
};

module.exports = models => {
    const getMainFunction = models => {
        return async (...args) => {
            await logic(models, ...args);
        };
    };
    return {
        method: 'post',
        url: '/api/submit',
        func: getMainFunction(models),
    };
};
