const rolesService = require('../services/rolesService')
const usersService = require('../services/usersService')
const createError = require('http-errors')

exports.getRoles = async (req, res, next) => {
   const roles = await rolesService.getRoles()
   if (roles) {
      res.json({ data: roles })
   } else {
      next(createError(404, "no role found"))
   }
}

exports.getRoleById = async (req, res, next) => {
   const role = await rolesService.getRoleById(req.params.id)
   if (role) {
      res.json({ data: role })
   } else {
      next(createError(404, "no role found for this id"))
   }
}