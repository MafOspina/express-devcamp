const {DataTypes} = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//instancia del modelo
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async(req, res)=>{
    const allUsers = await User.findAll()

    res.status(200).json({
        "succes": true,
        "data": allUsers
    })
}

exports.getSingleUser = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `single User ${ req.params.id }`
    })
}

exports.createUser =  (req, res)=>{
    //código de sstatus
    res.status(201).json({
        "succes": true,
        "data": "creación de User"
    })
}

exports.updateUser = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `update User ${ req.params.id }`
    })
}

exports.deleteUser = (req, res)=>{
    res.status(200).json({
        "succes": true,
        "data": `delete User ${ req.params.id }`
    })
}