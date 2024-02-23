const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();
app.use(express.json()); //middleware

//routes
app.use("/api/products", productRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from node API updated");
});

mongoose
  .connect(
    "mongodb+srv://admin:admin@backenddb.a2iuozj.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection failed");
  });
