const db = require('../db');
const bcrypt = require('bcrypt');

const registroUser = async (req, res) => {
  const { nombre, username, correo, contraseña } = req.body;

  if (!nombre || !username || !correo || !contraseña) {
    return res.status(400).json({message: 'Todos los campos deben de ser llenados.'});
  }
  
  try {
    const [rows] = await db.promise().query('SELECT id_usuario FROM usuarios WHERE correo = ?', [correo]);

    if (rows.length > 0) {
      return res.status(400).json({message: 'Este correo ya esta en uso'});
    }

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const sql = 'INSERT INTO usuarios (nombre, username, correo, contraseña) VALUES (?, ?, ?, ?)';
    await db.promise().query(sql, [nombre, username, correo, hashedPassword]);

    res.status(201).json({message: 'Registro Exitoso'});

  } catch (err) {
    console.error('Error al realizar el registro:', err);
    res.status(500).json({message: 'Error del servidor.'});
  }
};

module.exports = {registroUser}
