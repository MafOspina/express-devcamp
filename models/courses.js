'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg: "Tile no debe estar vacío"
        },
        notNull:{
          args:true,
          msg: "Title puede ser nulo"
        },
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg: "description no debe estar vacío"
        },
        notNull:{
          args:true,
          msg: "description puede ser nulo"
        },
      }
    },
    weeks: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg: "WEEKS no debe estar vacío"
        },
        notNull:{
          args:true,
          msg: "weeks no puede ser nulo"
        },
        isInt:{
          args:true,
          msg: "weeks debe ser un numero"
        },
        max:{
          args:true,
          msg: "solo puede ser un digíto"
        }
      }
    },
    enroll_cost: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty:{
          args:true,
          msg: "enroll_cost no debe estar vacío"
        },
        notNull:{
          args:true,
          msg: "enroll_cost no puede ser nulo"
        },
        isFloat:{
          args:true,
          msg: "enroll_cost debe ser float"
        }
      }
    },
    minimum_skill: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: false,
      validate:{
        isAlpha:{
          args:true,
          msg: "inimum_skill solo debe tener letras"
        },
        notEmpty:{
          args:true,
          msg: "inimum_skill no debe estar vacío"
        },
        notNull:{
          args:true,
          msg: "inimum_skill no puede ser nulo"
        }
      }
    }
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Courses',
  });
  return Courses;
};