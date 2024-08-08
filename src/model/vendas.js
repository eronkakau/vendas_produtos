const mongoose = require('mongoose')
const conexao = require('../../config/mongo')

conexao()
const vendasSchema = mongoose.Schema({
    nome:String,
    preco:Number,
    descricao:String,
    quantidade:Number,
})

const vendasModel = mongoose.model('vendas', vendasSchema)
module.exports = vendasModel