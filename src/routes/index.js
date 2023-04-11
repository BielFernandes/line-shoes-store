const express = require('express')
const router = express.Router()
const path = require('path')
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')
const UserController = require('../controllers/UserController')
const upload = require('../middlewares/multerMiddlewares')
const auth = require('../middlewares/auth')



router.get('/', mainController.index)

router.get('/banco-produtos', auth, mainController.viewBancoProdutos)

router.get('/produtos', mainController.mostrarProdutos)

router.get('/produtos/:id', productController.mostrarId)

router.get('/criar', auth , productController.viewCriarProduto)

router.get('/produtos/editar/:id', auth , productController.viewEditarProduto)

router.put('/produtos/:id', auth , productController.editarProduto)

router.post('/criar', auth ,upload.any(), productController.criarProduto)

router.delete('/deletar/:id', auth, productController.deletarProduto)


router.get('/users/criar', UserController.viewCriarUsuario)
router.post('/users/criar', UserController.criarUsuario)
router.get('/login', UserController.viewLogin)
router.post('/login', UserController.login)



module.exports = router