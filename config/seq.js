const Sequelize = require('sequelize')
const dotenv = require('dotenv')

//establecer ruta al config.env
dotenv.config({
    path:'./config_env/config.env'
})

//crear objeto de conexión
const sequelize = new Sequelize(
    //BASE DE DATOS DE CONEXIÓN
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_MOTOR,

        /* si no esta el 3306 por defecto
        port:3308*/
    }
)
module.exports = sequelize