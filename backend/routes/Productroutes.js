const express = require("express")
const productRouter = express.Router()
const { ProductModel } = require("../model/product.model")

productRouter.get("/", async (req, res) => {
  let query = {}
  if (req.query.color) {
    query.color = req.query.color
  }
  try {
    const sortOrder = req.query.sort === "desc" ? -1 : 1
    const products = await ProductModel.find(query).sort({
      discountPrice: sortOrder,
    })
    res.send(products)
  } catch (err) {
    res.send(err)
  }
})

productRouter.post("/post", () => {})

productRouter.post("/update", () => {})

productRouter.post("/delete", () => {})

module.exports = {
  productRouter,
}
