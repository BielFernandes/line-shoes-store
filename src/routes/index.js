const express = require('express')
const router = express.Router()
const path = require('path')
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')


const multer = require('multer')
const diskStorageMulter = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/img/produtos')
    },
    filename: (req, file, callback) => {
        callback(null, Date.now() + '-' + file.originalname)
    }
})
const upload = multer({storage:diskStorageMulter})



router.get('/', mainController.index)

router.get('/banco-produtos', mainController.viewBancoProdutos)

router.get('/produtos', mainController.mostrarProdutos)

router.get('/produtos/:id', productController.mostrarId)

router.get('/criar', productController.viewCriarProduto)

router.get('/produtos/editar/:id', productController.viewEditarProduto)

router.put('/produtos/:id', productController.editarProduto)

router.post('/criar',upload.any(), productController.criarProduto)

router.delete('/deletar/:id', productController.deletarProduto)


module.exports = router