const mysql = require("mysql2");

console.log("Probando la conexión");

const connection = mysql.createConnection({
  host: "buu9jmms9fltha4jefno-mysql.services.clever-cloud.com",
  user: "uphozyqbhh7vltks",
  password: "plO9h9EZ8JhavB1JGXvT",
  database: "buu9jmms9fltha4jefno",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err.message);
  } else {
    console.log("¡Conexión exitosa a la base de datos!");
  }
});

module.exports = connection;
