const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')

router.get('/', mainController.index)

router.get('/banco-produtos', mainController.viewBancoProdutos)

router.get('/produtos', mainController.mostrarProdutos)

router.get('/produtos/:id', productController.mostrarId)

router.get('/criar', productController.viewCriarProduto)

router.get('/produtos/editar/:id', productController.viewEditarProduto)

router.put('/produtos/:id', productController.editarProduto)

router.post('/criar', productController.criarProduto)

router.delete('/deletar/:id', productController.deletarProduto)


module.exports = router