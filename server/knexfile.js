module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost:/Frenemies'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
