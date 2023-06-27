const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Products = require("./Products");
const Users = require("./Users");
const Orders = require("./Orders");
const chapa = require("chapa-node");

const app = express();
//const port = process.env.PORT || 8000;
//backend port
const port = 8000;
//const CHAPA_URL = process.env.CHAPA_URL || "https://api.chapa.co/v1/transaction/initialize"
//const CHAPA_AUTH = process.env.CHAPA_AUTH // || register to chapa and get the key
//const TEXT_REF = "tx-myecommerce12345-" + Date.now()
// Middlewares
app.use(express.json());
app.use(cors());

// connection url='mongodb+srv://ayana:sa12345678@cluster0.iajn9lr.mongodb.net/Cluster0?retryWrites=true&w=majority'

const connection_url =
  "mongodb+srv://ayana:sa12345678@cluster0.iajn9lr.mongodb.net/Cluster0?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// API

app.get("/", (req, res) => res.status(200).send("Home Page"));

// add product

app.post("/products/add", (req, res) => {
  const productDetail = req.body;

  console.log("Product Detail >>>>", productDetail);
//productss is the schema or table in mongodb 
//create is a a special  term use to creat collections in db
  Products.create(productDetail, (err, data) => {
    if (err) {
      res.status(500).send(err.message);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//products is the db in mongo db
//find a key  term used to retrive or find data
app.get("/products/get", (req, res) => {
  Products.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// API for SIGNUP

app.post("/auth/signup", async (req, res) => {
  const { email, password, fullName } = req.body;

  const encrypt_password = await bcrypt.hash(password, 10);

  const userDetail = {
    email: email,
    password: encrypt_password,
    fullName: fullName,
  };

  const user_exist = await Users.findOne({ email: email });

  if (user_exist) {
    res.send({ message: "The Email is already in use !" });
  } else {
    Users.create(userDetail, (err, result) => {
      if (err) {
        res.status(500).send({ message: err.message });
      } else {
        res.send({ message: "User Created Succesfully" });
      }
    });
  }
});

// API for LOGIN

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  const userDetail = await Users.findOne({ email: email });

  if (userDetail) {
    if (await bcrypt.compare(password, userDetail.password)) {
      res.send(userDetail);
    } else {
      res.send({ error: "invaild Password" });
    }
  } else {
    res.send({ error: "user is not exist" });
  }
});

// API for PAYMENT
app.get("/payment/create", async (req, res) => {
  const response = await chapa.createPayment({
    appId: "CHAPUBK_TEST-5xEkuH2tguYVAwRdgefJ2HYkD9ef7gfq",
    appSecret: "CHASECK_TEST-KLkIEuNuPM9rszFXPrl955B4SAPXSJR6",
    amount: req.query.amount,
    description: req.query.description,
  });

  response.send(response);
});


// API TO add ORDER DETAILS

app.post("/orders/add", (req, res) => {
  const products = req.body.basket;
  const price = req.body.price;
  const email = req.body.email;
  const address = req.body.address;

  const orderDetail = {
    products: products,
    price: price,
    address: address,
    email: email,
  };

  Orders.create(orderDetail, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log("order added to database >> ", result);
    }
  });
});

app.post("/orders/get", (req, res) => {
  const email = req.body.email;

  Orders.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
      const userOrders = result.filter((order) => order.email === email);
      res.send(userOrders);
    }
  });
});

app.listen(port, () => console.log("listening on the port", port));
