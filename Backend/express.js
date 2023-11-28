//nUzZcP1S4A48RFjx

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const productrouter = require("./routes/products.routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((result) =>
    app.listen(process.env.PORT, () => console.log(`Server Running`))
  )
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/products", productrouter);
