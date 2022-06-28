const express = require('express');
const router = express.Router();


const sauceController = require('../controllers/sauce');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.get('/', auth, sauceController.getAllSauces);
router.get('/:id', auth, sauceController.getOneSauce);
//router.post('/', auth, multer, sauceController.createSauce);
//router.put('/:id', auth, multer, sauceController.modifySauce);
//router.delete('/:id', auth, sauceController.deleteSauce);

module.exports = router;

