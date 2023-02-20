const router = require("express")();
const promController = require("../../controllers/prom.controller");

router.get("/list", promController.getProductsList);
router.get("/:id",promController.getProductById)
router.get("/translation/:id",promController.getTranslationById)
router.put("/translation",promController.updateTranslationById)
module.exports = router