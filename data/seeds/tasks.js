
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_desc: 'testing tasks', notes: 'test should run', project_id: 1, completed: true}
      ]);
    });
};
