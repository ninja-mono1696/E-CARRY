const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
  image: String,
  title: String,
  salePrice: Number,
  discountPrice: Number,
  category: String,
  color: String,
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = {
  ProductModel,
}
