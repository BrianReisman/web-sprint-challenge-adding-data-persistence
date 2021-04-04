const router = require('express').Router()
const helpers = require('./model');

router.get("/", async (req, res) => {
  try {
    const tasks = await helpers.getTasks();
    tasks
      ? res.status(200).json(tasks)
      : res.status(400).json({ message: "no tasks" });
  } catch (err) {
    res.status(400).json({ message: "server side error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const addedTask = await helpers.addTask(req.body);
console.log(addedTask)
    addedTask
      ? res.status(200).json(addedTask)
      : res.status(400).json({ message: "no task added" });
  } catch (err) {
    res.status(400).json({ message: "post @ task server side error" });
  }
});


module.exports = router;