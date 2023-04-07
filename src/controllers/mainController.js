const produtos = require('../database/produtos.json')

const mainController = {
    index: (req, res) => {
        res.render('index', {produtos})
    },

    mostrarProdutos: (req, res) =>{
        res.render('products', {produtos})
    },
    
    viewBancoProdutos: (req,res) => {
        res.render('database', {produtos})
    }
}



module.exports = mainController