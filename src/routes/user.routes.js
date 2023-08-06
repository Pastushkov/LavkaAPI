const router = require("express")();
const userController = require("../controllers/user.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const accessMiddleware = require("../middlewares/access.middleware");

/**
 * @api {patch} /users/me Update user self
 * @apiVersion 1.0.0
 * @apiName UpdateUserSelf
 * @apiGroup Users
 *
 * @apiBody {String} name User name
 * @apiBody {String} phone User phone
 * @apiBody {Object} address User address(object with city, street...)
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload:
 *  {
 *           "_id": "63eb8e7b134e1582185df202",
 *           "name": "Olegkeeeee",
 *           "phone": "12321cxc",
 *           "email": "dimaspas62@gmail.com",
 *           "password": null,
 *           "type": "shipper",
 *           "__v": 0
 *       },
 *       }
 *
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
router.patch(
  "/me",
  authMiddleware,
  accessMiddleware,
  userController.updateUserSelf
);

/**
 * @api {get} /users/:id Get users by id
 * @apiVersion 1.0.0
 * @apiName GetUsersById
 * @apiGroup Users
 *
 * @apiParam id User id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload:
 *  {
 *           "_id": "63eb8e7b134e1582185df202",
 *           "name": "Olegkeeeee",
 *           "phone": "12321cxc",
 *           "email": "dimaspas62@gmail.com",
 *           "password": null,
 *           "type": "shipper",
 *           "__v": 0
 *       },
 *       }
 *
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
router.get("/me", authMiddleware, accessMiddleware, userController.getUserMe);

module.exports = router;
