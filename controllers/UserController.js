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

exports.getSingleUser = async(req, res)=>{
    const singleUser = await User.findByPk(req.params.id)

    res.status(200).json({
        "succes": true,
        "data": singleUser
    })
}

exports.createUser =  async(req, res)=>{

    const newUser = await User.create(req.body);

    //código de sstatus
    res.status(201).json({
        "succes": true,
        "data": newUser
    })
}

exports.updateUser = async(req, res)=>{
    await User.update(req.body, {
        where:{
            id:req.params.id
        }
    })

    const singleUser = await User.findByPk(req.params.id)

    res.status(200).json({
        "succes": true,
        "data": singleUser
    })
}

exports.deleteUser = async(req, res)=>{
    await User.destroy({
        where: {
            id: req.params.id
        }
      });

    res.status(200).json({
        "succes": true,
        "data": `delete User ${ req.params.id }`
    })
}