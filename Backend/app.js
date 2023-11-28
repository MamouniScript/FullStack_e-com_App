require('dotenv').config();
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const productsRoute = require("./routes/productRoute")
const cors = require("cors");


app.use(cors());


dotenv.config();

mongoose
  .connect(process.env.DB_CONNECTION)
  .then((result) =>
    app.listen(process.env.PORT, () => console.log(`Server Running`))
  )
  .catch((err) => console.log(err));

app.use(express.json());

app.use("/products", productrouter);




































// require('dotenv').config();
// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// const productsRoute = require("./routes/productRoute")
// const cors = require("cors");

// const port = 4000
// const connectionString = process.env.MONGO_CONNECTION_STRING;


// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cors());

// app.use("/", productsRoute)

// mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB successfully");
//     app.listen(port, () => console.log(`App listening on port ${port}`));
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error.message);
//     process.exit(1); // Exit the application on connection failure
//   });
