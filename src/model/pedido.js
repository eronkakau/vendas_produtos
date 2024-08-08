const mongoose = require('mongoose')
const conexao = require('../../config/mongo')

conexao()
const pedidoSchema = mongoose.Schema({

    valortotal: Number
})

const pedidoModel = mongoose.model('pedido', pedidoSchema)
module.exports = pedidoModel