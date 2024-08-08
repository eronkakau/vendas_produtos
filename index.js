const express = require('express')
const mongoose = require('mongoose')
const vendasModel = require('./src/model/vendas')
const produtoModel =  require('./src/model/produto')

const app = express()
app.use(express.json())

app.get('/', async (req, res)=>{
  return res.status(200).json({
    data: await vendasModel.find({})
  })
})
app.get('/produtos', async (req, res)=>{
  return res.status(200).json({
    data: await produtoModel.find({})
  })
})

app.post('/produtos', async(req, res)=>{

  const response = await produtoModel.create({
    nome:req.body.nome,
    descricao:req.body.descricao,
    preco:req.body.preco

  })
  return res.status(200).json({
    data:response
  })
})

app.post('/vendas',async (req, res)=>{
  const response = await vendasModel.create({
    nome: req.body.nome,
    preco: req.body.preco,
    descricao:req.body.nome,
    quantidade:req.body.quantidade,
  })
  return res.status(200).json({
    data:response
  })
})


app.get('/vendas/:id', async (req, res)=>{
  try {
    const membro = await vendasModel.findById(req.params.id)
    return res.status(200).json({
      data: membro
    })
  } catch (error) {
    return res.status(400).json({

      data:{},
      message:"não foi possivel encontrar sua venda"
    })
  }
  })

  app.put('/produtos/:id', async(req, res)=>{
    if(!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({

        data:{},
        message:'Id não encontrado q pena'
      })
    }
    const membro = await produtoModel.updateOne({_id: req.params.id}, req.body)

    return res.status(200).json({

      data:membro
    })
    
  })

  app.delete('/produtos/:id', async (req, res)=>{

    if(!mongoose.isValidObjectId(req.params.id)){
      return res.status(400).json({

        data:{},
        message:'Id não encontrado q pena'
      })
    }
    const membro = await produtoModel.deleteOne({_id: req.params.id})

    return res.status(200).json({
      data:membro
    });
  })

app.listen(4040, () => {

    console.log('Servidor funcionando na PORTA 4040')
})