const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8080;
//mongodb connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  cpassword: String,
  image: String,
});

//model
const userModel = mongoose.model("user", userSchema);

//MONGODB_URL = "mongodb+srv://mahekpatel:mahek2003@cluster0.k5tbgry.mongodb.net/DFEcom?retryWrites=true&w=majority"

// api
app.get("/", (req, res) => {
  res.send("Server is Running");
});

//SignIn api
app.post("/SignIn", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }, (err, result) => {
    console.log(result);
    console.log(err);
    if (result) {
      res.send({
        //status: "false",
        message: "Email id is already register",
        alert: false,
      });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({
        // status: "true",
        message: "Successfully Sign In",
        alert: true,
      });
    }
  });
});

//Login api
app.post("/Login", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  userModel.findOne({ email: email }, (err, result) => {
    if (result) {
      const dataSend = {
        _id: result._id,
        firstName: result.firstName,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      console.log(dataSend);
      res.send({
        message: "Login Successfully ! ",
        alert: true,
        data: dataSend,
      });
    } else {
      res.send({
        message: "It seems that you haven't SignIn with this Email id",
        alert: false,
      });
    }
  });
});

//Product section

const schemaProduct = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: String,
  description: String,
});
const productModel = mongoose.model("product", schemaProduct);

//Save Product in database
//api
app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);
  const data = await productModel(req.body);
  const datasave = await data.save();
  res.send({ message: "Uploaded Successfully !" });
});

//
app.get("/product", async (req, res) => {
  const data = await productModel.find({});
  res.send(JSON.stringify(data));
});

//ordre schema
const orderSchema = mongoose.Schema({
  name: String,
  email: String,
  address: String,
  pincode: String,
  amount: String,
});
//model
const orderModel = mongoose.model("order", orderSchema);

//api
app.post("/order", async (req, res) => {
  console.log(req.body);
  const data = await orderModel(req.body);
  const ordersave = await data.save();
  res.send({ message: "Order placed Successfully !" });
});

//
app.get("/orderData", async (req, res) => {
  const data = await orderModel.find({});
  res.send(JSON.stringify(data));
});

app.listen(PORT, () => console.log("Server is Running at port : " + PORT));
