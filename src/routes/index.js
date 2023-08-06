const router = require("express")();
const authMiddleware = require('../middlewares/auth.middleware')
const emailRoutes = require("./email.routes");
const appRoutes = require("./app");
const authRoutes = require("./auth.routes");
const promRoutes = require('./prom')
const userRoutes = require('./user.routes')

router.use("/", appRoutes);
router.use("/auth", authRoutes);
router.use("/email", emailRoutes);
router.use('/prom',promRoutes)
router.use('/users',userRoutes)

module.exports = router;
