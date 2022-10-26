const sequelize = require('./seq')
const colors = require('colors')

//funcion para conectar a la base de datos

const connectDB = async ()=>{
    try {
        await sequelize.authenticate()
        console.log('Conectado a servidor mysql'.bgCyan)

    } catch (error) {
        console.log(error)
    }
     
}   

module.exports = connectDB