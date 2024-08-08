const mongoose = require('mongoose')
const conexao = require('../../config/mongo')

conexao()

const clientesSchema = mongoose.Schema({
    nome:String
})

const clientesModel = mongoose.model('clientes', clientesSchema)
module.exports = clientesModel