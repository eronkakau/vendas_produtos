const mongoose = require('mongoose')
const conexao = require('../../config/mongo')

conexao()

const estoqueSchema = mongoose.Schema({
    quantidade:String
})

const estoqueModel = mongoose.model('estoque', estoqueSchema)
module.exports = estoqueModel