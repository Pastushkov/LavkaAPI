const router = require("express")();
const authController = require("../controllers/auth.controller");

/**
 * @api {post} /auth/register Register new user
 * @apiVersion 1.0.0
 * @apiName RegisterNewUser
 * @apiGroup Auth
 *
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 * @apiBody {String} name User name
 * @apiBody {String} phone User phone
 * @apiBody {Object} address User address (optional)
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *       name: "NAME",
 *       phone: "000000000",
 *       email: "email@email.com",
 *       password: null,
 *       type: "shipper",
 *       _id: "a1a1a1a1a1a1a1a1",
 *  },
 *      error: null,
 * }
 *
 * @apiError {json} object object with error
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      status: false,
 *      payload: null,
 *      error: {
 *        message: error,
 *        description: error,
 *        code: 400 },
 *     }
 */
router.post("/register", authController.register);

/**
 * @api {post} /auth/login Login user
 * @apiVersion 1.0.0
 * @apiName LoginUser
 * @apiGroup Auth
 *
 * @apiBody {String} email User email
 * @apiBody {String} password User password
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *          token: "a1a1a1a1a11aa1a1"
 *  },
 *      error: null,
 * }
 *
 * @apiError {json} object object with error
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *      status: false,
 *      payload: null,
 *      error: {
 *        message: error,
 *        description: error,
 *        code: 400 },
 *     }
 */
router.post("/login", authController.login);

module.exports = router;
