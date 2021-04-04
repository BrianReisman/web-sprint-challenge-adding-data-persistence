const router = require("express").Router();
const helpers = require("./model.js");

router.get("/", async (req, res) => {
  try {
    const resources = await helpers.getResources();
    resources
      ? res.status(200).json(resources)
      : res.status(400).json({ message: "no resources" });
  } catch (err) {
    res.status(400).json({ message: "server side error" });
  }
});

router.post("/", async (req, res) => {
  console.log("inside [POST] resource router");
  try {
    const addedResources = await helpers.addResource(req.body);
    addedResources
      ? res.status(200).json(addedResources)
      : res.status(400).json({ message: "no resource added" });
  } catch (err) {
    res.status(400).json({ message: "server side error" });
  }
});

module.exports = router;
