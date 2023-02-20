const router = require("express")();
const emailController = require('../controllers/email.controller')

router.post("/send/html",emailController.sendEmailHtml);

module.exports = router;
