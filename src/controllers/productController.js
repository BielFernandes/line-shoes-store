const produtos = require('../database/produtos.json')

const productController = {
    mostrarId: (req,res) => {
        const { id } = req.params

        const showById = produtos.find(item => String(item.id) === id)
        return res.render('detalhes', {showById})
    },
    viewCriarProduto: (req, res) => {
        res.render('criar-produto')
    },
    criarProduto(req, res){
        console.log(req.body)
       }
}

module.exports = productController