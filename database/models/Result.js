const init = (Sequelize, sequelize) => {
    return sequelize.define('results', {
        problem_id: {
            type: Sequelize.INTEGER
        },
        answer: {
            type: Sequelize.STRING
        },
        result: {
            type: Sequelize.INTEGER
        }
    }, {
        paranoid: true
    });
};

module.exports = (...args) => {
    const model = init(...args);
    return {
        name: 'Result',
        model,
        async sync() {
            await model.sync({force: true});
        }
    }
};
