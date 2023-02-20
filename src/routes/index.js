const router = require("express")();
const emailRoutes = require("./email.routes");
const appRoutes = require("./app");
const authRoutes = require("./auth.routes");
const soapRoutes = require("./soap.routes");
const promRoutes = require('./prom')
const authMiddleware = require('../middlewares/auth.middleware')

router.use("/", appRoutes);
router.use("/auth", authRoutes);
router.use("/soap", soapRoutes);
router.use("/email", emailRoutes);
router.use('/prom',authMiddleware, promRoutes)
module.exports = router;
