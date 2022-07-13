module.exports = async (models, req, res) => {
    const input = JSON.parse(req.body.input);
    const problems = await models.Problem.findAll({});
    const results = problems.map((problem, idx) => {
        return {
            id: problem.id,
            result: (input[idx].answer === problem.answer),
            answer_submitted: input[idx].answer,
            answer: problem.answer
        };
    });

    await models.Result.bulkCreate(results.map(r => {
        return {
            problem_id: r.id,
            result: r.result ? 1 : 0,
            answer: r.answer_submitted
        };
    }));

    res.json({
        results: results
    });
};
