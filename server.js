//1. Crear la dependencia a express
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')

//conexion bd
const connectDB = require('./config/db')

const listEndpoints = require('express-list-endpoints')

//Dependencia de rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const cursosRoutes = require('./routes/CursosRoutes')
const userRoutes = require('./routes/UserRoutes')

//definiendo archivo .env - ruta del archivo .env
dotenv.config({
    path: './config/config.env'
})

//2. Crear el objeto app con express
const app = express()

//habilirar express para tratar datos - content- type json
app.use(express.json())

//conectar a base de datos
connectDB()


//Relacionar rutas de dominio
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/cursos', cursosRoutes)
app.use('/api/v1/users', userRoutes)


//Ruta de prueba
app.get('/', (request, response)=>{
 response.send('Ruta funcionando')
})

//Consultar endpoints-rutas del proyecto
console.log(listEndpoints(app))

//3. Iniciar el devserver - usando variables de entorno de proyecto
app.listen(process.env.PORT, ()=>{
    console.log('Servidor iniciado'.bgGreen)
})