const bcrypt = require('bcrypt');
const connection = require('./db');

async function crearUsuario(nombre, username, correo, contraseña) {
  try {
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    const sql = 'INSERT INTO usuarios (nombre, username, correo, contraseña) VALUES (?, ?, ?, ?)';
    connection.query(sql, [nombre, username, correo, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error al insertar usuario:', err);
      } else {
        console.log('Usuario insertado con éxito, ID:', result.insertId);
      }
      connection.end(); 
    });
  } catch (error) {
    console.error('Error al encriptar contraseña:', error);
  }
}


crearUsuario('Ana López', 'anita123', 'ana@example.com', '1234segura');
