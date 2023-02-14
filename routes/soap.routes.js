const router = require("express")();
const soapController = require("../controllers/soap.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const accessMiddleware = require("../middlewares/access.middleware");

router.post("/", authMiddleware, accessMiddleware, soapController.createSoap);
router.patch(
  "/:id",
  authMiddleware,
  accessMiddleware,
  soapController.patchSoap
);
router.get("/", soapController.getAllSoap);
router.get("/:id", soapController.getSoapById);

module.exports = router;
