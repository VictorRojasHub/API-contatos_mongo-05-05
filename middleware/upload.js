const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'), //multer procura a pasta atual do projeto e toda vez que for feita uma requisição ele cria um novo nome do arquivo + a extensão da data atual
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

module.exports = multer({ storage });