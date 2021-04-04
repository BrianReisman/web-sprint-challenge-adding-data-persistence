// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = () => {
  return db("projects")
    .join("tasks", "tasks.project_id", "projects.project_id")
    .select(
      "tasks.task_id",
      "tasks.task_description",
      "tasks.task_notes",
      "tasks.task_completed",
      "projects.project_name",
      "projects.project_description"
    );
};

const addTask = async (newTask) => {
  const task = await db("tasks").insert(newTask);
  if (task) {
    return db("tasks")
      .select(
        "tasks.task_id",
        "tasks.task_description",
        "tasks.task_notes",
        "tasks.task_completed",
        "tasks.project_id"
      )
      .where({ project_id: newTask.project_id });
  } else {
    return { message: "trouble from inside addTask()" };
  }
  // return db('projects').where({project_id: newTask.project_id})
  // .join('tasks', 'tasks.project_id', 'projects.project_id')
};

module.exports = {
  getTasks,
  addTask,
};
