module.exports = async (models, req, res) => {
    const problems = await models.Problem.findAll({});
    res.json(
        {
            problems: problems.map((problem) => {
                return {
                    id: problem.id,
                    problem_text: problem.problem_text,
                    type: problem.type,
                    choices: problem.choices,
                    answer: problem.answer
                };
            })
        }
    );
};
