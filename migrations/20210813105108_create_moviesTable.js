exports.up = function(knex) {
 return knex.schema.createTable('movies', table => {
   table.increments('id'); // adds an auto incrementing PK column
   table.string('title').notNullable();
   table.integer('runtime');
   table.integer('release_year');
   table.string('director')
 });
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists('movies');
};