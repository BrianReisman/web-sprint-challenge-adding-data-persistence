exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          task_description: "power the computer on",
          task_notes: "notes notes notes",
          task_completed: 0,
          project_id: 1
        },
      ]);
    });
};
