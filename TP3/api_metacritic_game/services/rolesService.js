const db = require('../models/indexModel')

exports.getIdRolesByNom = async (nom) => {
    return await db.roles.findOne({
        where: {
            nom,
        },
        attributes: ['id'],
    })
}

exports.getRoleById = async (id) => {
    return await db.roles.findOne({
      where: {
        id,
      },
    })
  }

exports.getRoles = async () => {
    return await db.roles.findAll()
}

exports.putUser = async (id, pseudo, password, email) => {
  return await db.users.update(
    { pseudo: pseudo, hashedPassword: password, email: email },
    {
      where: {
        id,
      },
    }
  )
}