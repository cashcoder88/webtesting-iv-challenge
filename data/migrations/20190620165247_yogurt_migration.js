exports.up = function(knex, Promise) {
  return knex.schema.createTable('yogurts', tbl => {
      tbl.increments();

      tbl.string('name', 250).notNullable().unique();
      tbl.string('type', 128).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('yogurts');
};
