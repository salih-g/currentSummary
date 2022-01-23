const router = require("express").Router();

const Question = require("../../models/Question");

router.post("/", async (req, res) => {
  const newQuestion = new Question(req.body);

  try {
    await newQuestion.save();

    res.status(201).json({ message: "successfully created" });
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
});

router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
});

module.exports = router;
