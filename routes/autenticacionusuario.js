const express = require('express');
const router = express.Router();
const { registroUser } = require('../controllers/crearusuario');

router.post('/register', registroUser);

module.exports = router;