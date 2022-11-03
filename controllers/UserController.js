
const {DataTypes, ValidationError} = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')
//instancia del modelo
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async(req, res)=>{

    try {
        const allUsers = await User.findAll()
        res.status(200).json({
            "succes": true,
            "data": allUsers
        })

    } catch (error) {
        res.status(400).json({
                "succes": false,
                "errors": "error de servidor"
            })
    }
   
}

exports.getSingleUser = async(req, res)=>{

    try {
        //seleccionar usuario por id
        const singleUser = await User.findByPk(req.params.id)

        if(!singleUser){
            res.status(400).json({
                "succes": false,
                "errors": "No se encontró el registro"
            })
        }else{
        //enviar response
        res.status(200).json({
            "succes": true,
            "data": singleUser
        })
        }

    } catch (error) {
         res.status(400).json({
                "succes": false,
                "errors": "error de servidor"
            })
    }
    
}

exports.createUser =  async(req, res)=>{

    try {
        //grabar nuevo usuario
        const newUser = await User.create(req.body);

        //código de sstatus-enviar respuesta de nuevo usuario
        res.status(201).json({
            "succes": true,
            "data": newUser
        })

    } catch (error) {
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores;
            //MAP
            const msg_errores=error.errors.map(errorItem=> errorItem.message )
           
            res.status(422).json({
                "succes": false,
                "errors": msg_errores
            })
        }else{
            res.status(400).json({
                "succes": false,
                "errors": "error de servidor"
            })
        }
    }

   
}

exports.updateUser = async(req, res)=>{
    try {
        //selección del usuario
        const singleUser = await User.findByPk(req.params.id)

        //si no existe
        
        if(!singleUser){
            res.status(400).json({
                "succes": false,
                "errors": "No se encontró el registro"
            })
        }
        else{
            //si existe - update
            await User.update(req.body, {
                where:{
                    id:req.params.id
                }
            })

            //volver a seleccionar por id - para mostarrlo actualizado
            const updatedUser = await User.findByPk(req.params.id)
            //response con usuario actualizado
            
            res.status(200).json({
                "succes": true,
                "data": updatedUser
            })
        }
        
    } catch (error) {
         res.status(400).json({
                "succes": false,
                "errors": "error de servidor"
            })
    }
   
}

exports.deleteUser = async(req, res)=>{
    try {
        //selección del usuario
        const singleUser = await User.findByPk(req.params.id)

        //si no existe
        
        if(!singleUser){
            res.status(400).json({
                "succes": false,
                "errors": "No se encontró el registro"
            })
        }
        else{
            //si existe - update
            await User.destroy({
                where: {
                    id: req.params.id
                }
              })

            //volver a seleccionar por id - para mostarrlo actualizado
            const destroidUser = await User.findByPk(req.params.id)
            //response con usuario actualizado
            
            res.status(200).json({
                "succes": true,
                "data": destroidUser
            })
        }
        
    } catch (error) {
        res.status(400).json({
            "succes": false,
            "errors": "error de servidor"
        })
    }

}