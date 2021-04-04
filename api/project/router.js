const router = require("express").Router();
const helpers = require("./model.js");

router.get("/", async (req, res) => {
  try {
    const projects = await helpers.getProjects();
    projects
      ? res.status(200).json(projects)
      : res.status(400).json({ message: "no projects" });
  } catch (err) {
    res.status(400).json({ message: "server side error" });
  }
});

router.post("/", async (req, res) => {
  console.log("inside [POST] resource router");
  try {
    const addedProject = await helpers.addProject(req.body);
    addedProject
      ? res.status(200).json(addedProject)
      : res.status(400).json({ message: "no resource added" });
  } catch (err) {
    res.status(400).json({ message: "server side error" });
  }
});

module.exports = router;
