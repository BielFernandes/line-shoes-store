const express = require('express')
const router = express.Router()
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')

router.get('/', mainController.index)

router.get('/produtos', mainController.mostrarProdutos)

router.get('/produtos/:id', productController.mostrarId)

router.get('/criar', productController.viewCriarProduto)

router.post('/criar', productController.criarProduto)


module.exports = router