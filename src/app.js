const path = require('path')
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended:false }))
app.use(express.json())

const routes = require('../src/routes/index')

app.set('view engine', 'ejs') // Permitindo express a ler EJS

app.set('views', path.resolve('src', 'views')) // evita ficar caminhando por diretórios (./../.../)

app.use(express.static(path.resolve('public'))) // 

app.use(routes)


app.listen(3000, () => {
    console.log('O servidor está rodando em: localhost.com:3000')
})