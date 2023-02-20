const router = require("express")();

const productRoutes = require("./products.routes");

router.use("/products", productRoutes);

module.exports = router;
