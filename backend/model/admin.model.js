const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
})

const AdminModel = mongoose.Model("admin", adminSchema)

module.exports = {
  AdminModel,
}
