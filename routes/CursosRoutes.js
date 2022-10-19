const express = require('express')

const router = express.Router()

router.get('/', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": "listado de cursos"
    })
})

router.get('/:id', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `aqui se va a mostrar el curso cuyo id es ${ req.params.id }`
    })
})


router.post('/', (req, res)=>{
    //código de sstatus
    res.status(201).json({
        "succes": true,
        "data": "creación de curso"
    })
})

router.put('/:id', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `aqui se va a editar el curso cuyo id es ${ req.params.id }`
    })
})

router.delete('/:id', (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `aqui se va a borar el curso cuyo id es ${ req.params.id }`
    })
})

module.exports = router 