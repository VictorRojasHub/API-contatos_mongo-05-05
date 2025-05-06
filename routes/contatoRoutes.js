const express = require('express');
const router = express.Router();
const controller = require('../controllers/contatoController');

router.get('/', controller.listar); //pode-se colocar requisições por parâmetros.
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.deletar); //Dependendo do tamanho da tabela: colocar regra de filtro nas rotas.

module.exports = router;