const express = require('express');
const router = express.Router();

const userController = require('./controllers');
const sauceController = require('./controllers');
const auth = require('./middlewares');

router.post('/signup', userController.signup);
router.post('/login', userController.login);


router.get('/sauces', auth, sauceController.getSauces);
router.post('/sauces', auth, sauceController.createSauce);


module.exports = router;