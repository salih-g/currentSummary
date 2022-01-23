const router = require("express").Router();

const Question = require("../../models/Question");

//Create
router.post("/", async (req, res) => {
  const newQuestion = new Question(req.body);

  try {
    await newQuestion.save();

    res.status(201).json({ message: "successfully created" });
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
});

//Get All
router.get("/", async (req, res) => {
  try {
    const questions = await Question.find();

    res.status(200).json(questions);
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
});

//Get by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = await Question.findById(id);
    res.status(200).json(question);
  } catch (err) {
    res.status(500).json({ error: err.message || err });
  }
});

module.exports = router;
