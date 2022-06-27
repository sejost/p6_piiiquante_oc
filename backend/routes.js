const express = require('express');
const router = express.Router();

const userController = require('./controllers');
const sauceController = require('./controllers');
const auth = require('./middlewares');
const multer = require('./middlewares')

router.post('/signup', userController.signup);
router.post('/login', userController.login);


router.get('/', auth, sauceController.getAllSauces);
router.post('/', auth, multer, sauceController.createSauce);
//router.get('/:id', auth, sauceController.getOneSauce);
//router.put('/:id', auth, multer, sauceController.modifySauce);
//router.delete('/:id', auth, sauceController.deleteSauce);


module.exports = router;