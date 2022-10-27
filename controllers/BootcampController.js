//1. Objeto de conexión 
const sequelize = require('../config/seq')

//2.Data types
const {DataTypes} = require('sequelize')

const BootcampModel = require('../models/bootcamp')

const Bootcamp = BootcampModel(sequelize, DataTypes)

//3.Modelo

exports.getAllBootcamps = async(req, res)=>{
    const allBootcamps = await Bootcamp.findAll()

    res.status(200).json({
        "succes": true,
        "data": allBootcamps
    })
}

exports.getSingleBootcamp = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `single bootcamp ${ req.params.id }`
    })
}

exports.createBootcamp =  async(req, res)=>{
    const newBootcamp = await Bootcamp.create(req.body)

    //código de sstatus
    res.status(201).json({
        "succes": true,
        "data": newBootcamp
    })
}

exports.updateBootcamp = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `update bootcamp ${ req.params.id }`
    })
}

exports.deleteBootcamp = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `delete bootcamp ${ req.params.id }`
    })
}