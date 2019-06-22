
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('yogurts').del()
    .then(function () {
      // Inserts seed entries
      return knex('yogurts').insert([
        {name: 'Chobani', type: 'greek'},
        {name: 'Noosa', type: 'aussie'},
        {name: 'Yoplait', type: 'regular'}
      ]);
    });
};
