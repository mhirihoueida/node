module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
/*Les cinq premiers paramètres sont pour la connexion MySQL.
poolest facultatif, il sera utilisé pour la configuration du pool de connexions Sequelize :

max: nombre maximum de connexion dans le pool
min: nombre minimum de connexion dans le pool
idle: temps maximum, en millisecondes, pendant lequel une connexion peut être inactive avant d'être libérée
acquire : durée maximale, en millisecondes, pendant laquelle ce pool essaiera d'obtenir la connexion avant de lancer une erreur*/