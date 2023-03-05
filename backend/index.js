const express = require("express")
const { connection } = require("./db")
require("dotenv").config()
const cors = require("cors")
const { ProductModel } = require("./model/product.model")
const { ProductRouter } = require("./routes/Productroutes")
const { AdminRouter } = require("./routes/admin.routes")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/products", ProductRouter)
app.use("/admin", AdminRouter)

app.listen(process.env.PORT, async () => {
  try {
    await connection
    console.log("connected to db")
    console.log(`Running on port ${process.env.PORT}`)
  } catch (err) {
    console.log(err)
  }
})
