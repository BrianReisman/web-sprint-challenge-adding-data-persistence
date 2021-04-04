
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {
          project_name: 'sprint challenge',
          project_description: 'stick the land on unit 4',
          project_completed: 0
        },
      ]);
    });
};
