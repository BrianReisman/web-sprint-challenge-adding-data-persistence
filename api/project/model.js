const db = require("../../data/dbConfig");

const getProjects = () => {
  return db("projects");
};

const addProject = (newProject) => {
  return db("projects").insert(newProject);
};

module.exports = {
  getProjects,
  addProject,
};
