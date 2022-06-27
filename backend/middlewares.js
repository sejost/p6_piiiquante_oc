const jwt = require('jsonwebtoken');
const multer = require('multer');
//const Str = require('@supercharge/strings'); //new package ' @supercharge/strings ' installed to generate a random string

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'token_3aE8e&5pbFmz');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'User ID non valable'
        }
        else {
            next();
        }
    }
    catch (error) {
        res.status(401).json({ error: error | 'Requête non authentifiée' });
    }
};


const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        const name = file.originalname.replaceAll(' ', '_');
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);
    }
});

module.exports = multer({ storage: storage }).single('image');