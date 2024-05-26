// TODO ajustar com base no .env, porem ocorre problema ao rodar npx sequelize-cli...
module.exports = {
  development: {
    username: "postgres",
    password: "postgres",
    database: "task-manager",
    host: "127.0.0.1",
    port: 5433,
    dialect: "postgres",
  },
};
