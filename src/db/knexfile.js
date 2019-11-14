export default {
  client: "postgresql",
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: "./db/migrations",
    stub: "./migration.stub"
  },
  seeds: {
    directory: "./db/seeds"
  }
};
