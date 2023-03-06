const express = require("express")
const UserRouter = express.Router()
const { UserModel } = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
UserRouter.post("/login", async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await UserModel.find({ email })
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (err) {
          res.send("incorrect password")
        } else {
          const token = jwt.sign({ userID: user[0]._id }, "masai")
          console.log(token)
          res.send({ msg: "logged in successfully", token: token })
        }
      })
    } else {
      res.send("incorrect details provided")
    }
  } catch (err) {
    res.send("User is not registered")
  }
})

UserRouter.post("/register", async (req, res) => {
  const { name, city, email, password } = req.body
  const user = await UserModel.find({ email })
  try {
    if (user.length > 0) {
      res.send({ msg: "User is already registered, please login" })
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "Something went wrong" })
        } else {
          const user = UserModel({ name, email, city, password: hash })
          await user.save()
          res.send({ msg: "user registered" })
        }
      })
    }
  } catch (err) {
    res.send("Something went wrong ")
  }
})

module.exports = {
  UserRouter,
}
