
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('candidates').del()
    .then(function () {
      // Inserts seed entries
      return knex('candidates').insert([
        {id: 1, party: 'Republican', presidential_candidate: "Donald J. Trump", vice_president_candidate: "Michael R. Pence"},
        {id: 2, party: 'Democrat', presidential_candidate: "Hillary R. Clinton", vice_president_candidate: "Timothy Kaine"},
        {id: 3, party: 'Libertarian', presidential_candidate: "Gary Johnson", vice_president_candidate: "William F. Feld"}
        {id: 4, party: 'Green', presidential_candidate: "Dr. Jill Stein", vice_president_candidate: "Ajamu Baraka"}
        {id: 5, party: 'Independent', presidential_candidate: "Evan McMullin", vice_president_candidate: "Nathan Johnson"}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('categories_id_seq', (SELECT MAX(id) FROM categories));`
      );
    });
};
