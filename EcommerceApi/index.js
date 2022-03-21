const express = require("express");
const app = express();

const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const orderRoute = require("./routes/orderRoute");
const cartRoute = require("./routes/cartRoute");
const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/stripe")

const cors = require('cors')
dotenv.config();
app.use(express.json());
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection succesfull"))
  .catch((err) => console.log(err));
app.use(cors())
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout",stripeRoute)

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
