const express = require("express")
const { connection } = require("./db")
require("dotenv").config()
const cors = require("cors")
const { ProductModel } = require("./model/product.model")
const { productRouter } = require("./routes/Productroutes")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/products", productRouter)
app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("connected to db")
    console.log(`Running on port ${process.env.PORT}`)
  } catch (err) {
    console.log(err)
  }
})
