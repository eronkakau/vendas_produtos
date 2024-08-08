const mongoose = require('mongoose')
const conexao = require('../../config/mongo')

conexao()
const produtoSchema = mongoose.Schema({
    nome:String,
    descricao: String,
    preco:Number},
    {
    timestamps: true
    }
)

const produtoModel = mongoose.model('produtos', produtoSchema)
module.exports = produtoModel