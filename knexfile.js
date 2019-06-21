// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/yogurts.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
  // testing: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/test.db3',
  //   },
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // },

  // production: {
  //   client: 'pg',
  //   connection: dbConnection,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  // }

};
