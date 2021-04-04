
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'computer',
          resource_description: 'that thing I work on'
        }
      ]);
    });
};
