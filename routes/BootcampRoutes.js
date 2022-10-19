const express = require('express')

const router = express.Router()

//Rutas para bootcamps
//1. Listar bootcamps
router.get('/', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": "listado de bootcamps"
    })
})


//2. Listar bootcamp por id- : indica un parámetro
router.get('/:id', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `aqui se va a mostrar el bootcamp cuyo id es ${ req.params.id }`
    })
})


//3. Crear bootcamp
router.post('/', (req, res)=>{
    //código de sstatus
    res.status(201).json({
        "succes": true,
        "data": "creación de bootcamp"
    })
})

//4. Actualizar por id
router.put('/:id', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `aqui se va a editar el bootcamp cuyo id es ${ req.params.id }`
    })
})


//5. Borrar por id
router.delete('/:id', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `aqui se va a borar el bootcamp cuyo id es ${ req.params.id }`
    })
})


module.exports = router 
