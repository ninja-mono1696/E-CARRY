const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
})

const AdminModel = mongoose.model("admin", adminSchema)

module.exports = {
  AdminModel,
}
