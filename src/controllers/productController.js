const produtos = require('../database/produtos.json')

const productController = {
    mostrarId: (req,res) => {
        const { id } = req.params

        const showById = produtos.find(item => String(item.id) === id)

        if(showById){
        return res.render('detalhes', {showById})
        } else {
            res.redirect('/')
        }
    },
    viewCriarProduto: (req, res) => {
        res.render('criar-produto')
    },
    criarProduto: (req, res) => {
        let newProduct = {
            id: Number(produtos[produtos.length - 1].id) + 1,
            name: req.body.name,
            price: req.body.price,
            marca: req.body.marca,
            image: 'default',
            tamanhos:["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
        }
        produtos.push(newProduct)
        res.redirect('/')
},
    viewEditarProduto:(req, res) => {
        const { id } = req.params

        const showById = produtos.find(item => String(item.id) === id)
        return res.render('editar-produto', {showById})
    },
    editarProduto: (req, res) => {
        const { id } = req.params
        
        const findIndexProduct = produtos.findIndex(item => String(item.id === id)) // encontrando indice do produto no array
        let showById = produtos.find(item => item.id == id) // encontrando produto no array

        if(findIndexProduct != -1){
            showById = {
                id: showById.id,
                name: req.body.name,
                price: req.body.price,
                marca: req.body.marca,
                image: showById.image,
                tamanhos: showById.tamanhos,
            }
            produtos[findIndexProduct] = showById
            res.redirect('/')
        }
    },

    deletarProduto: (req, res) => {
        const {id} = req.params

        const findIndexProduct = produtos.findIndex(item => String(item.id === id))
        
        if(findIndexProduct != -1){
            produtos.splice(findIndexProduct, 1)
            res.redirect('/')
        }
    }
}

module.exports = productController