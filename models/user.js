'use strict';
const {
  Model
} = require('sequelize');

const {hashPass} = require('../helpers/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Kanban, {foreignKey: "UserId"})
    }
  };
  User.init({
    fullName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Full Name Cannot be Empty'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Email Invalid / Already Taken'
      },
      validate: {
        notEmpty: {
          args: true,
          msg: 'Email Cannot be Empty'
        },
        isEmail: {
          args: true,
          msg: 'Email Is Invalid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password Cannot be Empty'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, opt) => {
        user.password = hashPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};