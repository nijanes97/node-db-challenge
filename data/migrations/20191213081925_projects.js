
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .notNullable();
        tbl.string('proj_desc', 400);
        tbl.boolean('completed')
            .defaultTo('false');
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_desc', 400)
            .notNullable();
        tbl.string('notes', 500);
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.boolean('completed')
            .defaultTo('false');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255)
            .unique()
            .notNullable();
        tbl.string('desc', 400);
    })
    .createTable('resource_linker', tbl => {
        tbl.increments();
        tbl.integer('resource_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('projects_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('resource_linker');
};
