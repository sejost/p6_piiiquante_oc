const express = require('express');
const router = express.Router();
const sauceController = require('../controllers/sauces');
const auth = require('../middlewares/auth');

router.get('/sauces', auth, sauceController.getAllSauces);

module.exports = router;