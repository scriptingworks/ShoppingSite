// const path = require("path");

// const express = require("express");
// const router = express.Router();

// const adminController = require("../controllers/admin");

// router.get("/add-product", adminController.getAddProduct);
// router.get("/edit-product/:productId", adminController.getEditProduct);
// router.get("/products", adminController.getProduct);

// router.post("/add-product", adminController.postAddProduct);

// module.exports = router;

const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/products => GET
router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

router.get("/edit-product/:productId", adminController.getEditProduct);
router.post("/edit-product", adminController.postEditProduct);
router.post("/delete-product", adminController.postDeleteProduct);

module.exports = router;
