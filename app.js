const path = require("path");

const express = require("express");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoute = require("./routes/shop");
const errorPageController = require("./controllers/error");
const Product = require("./models/product");
const User = require("./models/user");
const sequelize = require("./util/database");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/admin", adminRoutes);
app.use(shopRoute);

app.use(errorPageController.errorPage);
// console.log("after");
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
sequelize
  .sync()
  .then((result) => {
    User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Amal", email: "amal@gmail.com" });
    }
    return user;
  })
  .then((user) => {
    console.log(user);
    app.listen(3000);
  })
  .catch();
