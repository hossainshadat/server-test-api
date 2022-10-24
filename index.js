const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.port || 5000;

const products = require("./Data/product.json");

app.get("/", (req, res) => {
  res.send("Now server is running");
});

app.get("/allproducts", (req, res) => {
  res.send(products);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const getProductById = products.find((product) => product.id == id);
  res.send(getProductById);
});

app.get("/category/:name", (req, res) => {
  const category = req.params.category;
  const productCategory = products.filter(
    (product) => product.category == category
  );
  res.send(productCategory);
});

app.listen(port, () => {
  console.log(`Server running : ${port}`);
});

module.exports = app;
