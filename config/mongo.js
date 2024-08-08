const mongoose = require('mongoose')

let conexao 
const connection =()=>{

    if(conexao){
        return conexao
    }
   conexao =  mongoose.connect('mongodb://localhost:27017/local')

   
}

module.exports = connection