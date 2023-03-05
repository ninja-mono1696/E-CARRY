const express = require("express")
const AdminRouter = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { AdminModel } = require("../model/admin.model")

AdminRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body
  const admin = await AdminModel.find({ email })
  try {
    if (admin.length > 0) {
      res.send("Admin already exists,please login ")
    } else {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({
            msg: "Something went wrong",
            error: err.message,
          })
        } else {
          const admin = AdminModel({
            name,
            email,
            password: hash,
          })
          await admin.save()
          res.send({ msg: "New Admin registered successfully" })
        }
      })
    }
  } catch (err) {
    res.send({ msg: "something went wrong" })
  }
})

AdminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const admin = await AdminModel.find({ email })
    if (admin.length > 0) {
      bcrypt.compare(password, admin[0].password, async (err, result) => {
        if (result) {
          let token = jwt.sign({ adminID: admin[0]._id }, "masai")
          res.send({ msg: "login successfull", token })
        } else {
          res.send({ msg: "Something went wrong" })
        }
      })
    } else {
      res.send({ msg: "wrong credentials " })
    }
  } catch (err) {
    res.send({ msg: err.message })
  }
})

module.exports = {
  AdminRouter,
}
