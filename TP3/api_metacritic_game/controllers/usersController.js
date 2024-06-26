const usersService = require('../services/usersService')
const criticsUserService = require('../services/criticsUsersService')
const createError = require('http-errors')
const jwt = require('jsonwebtoken')
const bcrypt    = require('bcrypt')

exports.getUsers = async (req, res, next) => {
   const users = await usersService.getUsers()
   if (users) {
      res.json({ data: users })
   } else {
      next(createError(404, "no user found"))
   }
}

exports.addUser = async (req, res, next) => {
   if(!req.body.password || !req.body.pseudo || !req.body.email || !req.body.role){
      res.status(400).json({
         success: false,
         message: "Pseudo, email, password and role are required"
      }).send()
      return
   }

   bcrypt.hash(req.body.password, 10, async function(err, bcryptPassword){
      if(bcryptPassword){
         const userCreated = await usersService.addUser(req.body.pseudo, bcryptPassword, req.body.email, req.body.role)
         if (userCreated) {
            res.status(201).json({id: userCreated.id})
         } else {
            next(createError(400, "Error when creating this user, verify your args"))
         }
      }
    })
}

exports.getUserById = async (req, res, next) => {
   const user = await usersService.getUserById(req.params.id)
   if (user) {
      res.json({ data: user })
   } else {
      next(createError(404, "no user found for this id"))
   }
}

exports.putUser = async (req, res, next) => {
   const user = await usersService.updateRoleByUserId(req.params.id, req.body.email, req.body.pseudo);
   if (user) {
      return res.status(200).json({
         success: true,
         message: "User updated",
         id: user.id,
         pseudo: user.pseudo,
         email: user.email
      });
   }
}

exports.deleteUserById = (req, res, next) => {
   try {
      const userConnected = jwt.verify(req.headers.authorization.split(' ')[1], process.env.JWT_SIGN_SECRET)
      usersService.deleteUserById(userConnected.userId)
      res.status(204).json({
         success: true,
         message: "User deleted"
      })
   } catch(e) {
      next(createError(404, `This user doesn't exists, it cannot be deleted`))
   }
}

exports.updateRoleByUserId = async (req, res, next) => {
   const role = await usersService.updateRoleByUserId(req.params.id, req.body.role);
   if (role) {
      return res.status(200).json({
         success: true,
         message: "User updated",
         user: {
            id: role.id,
            role: role.role
         }
      });
   } else {
      return res.status(404).json({
         success: false,
         message: "User not found"
      });
   }
}