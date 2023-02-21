const router = require("express")();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const accessMiddleware = require("../middlewares/access.middleware");


router.patch('/me',authMiddleware,userController.updateUserSelf)

router.get("/:id", userController.getUserById);

router.patch("/:id",authMiddleware, accessMiddleware, userController.updateUserById);

/**
 * @api {patch} /users Get list of users
 * @apiVersion 1.0.0
 * @apiName GetUsersList
 * @apiGroup Users
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: [
 *  
 * ]
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
router.get("/", authMiddleware, accessMiddleware, userController.getUsersList);

module.exports = router;
