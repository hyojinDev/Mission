const initData = require('../database.json');
const init = (Sequelize, sequelize) => {
    return sequelize.define('problems', {
        problem_text: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.INTEGER
        },
        choices: {
            type: Sequelize.STRING
        },
        answer: {
            type: Sequelize.STRING
        }
    }, {
        paranoid: true
    });
};

module.exports = (...args) => {
    const model = init(...args);
    return {
        name: 'Problem',
        model,
        async sync() {
           await model.sync({force: true});
           await model.bulkCreate(initData);
        }
    }
};
