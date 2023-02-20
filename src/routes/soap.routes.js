const router = require("express")();
const soapController = require("../controllers/soap.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const accessMiddleware = require("../middlewares/access.middleware");

/**
 * @api {post} /soap Create new soap
 * @apiVersion 1.0.0
 * @apiName CreateNewSoap
 * @apiGroup Soap
 *
 * @apiBody {String} name Soap name
 * @apiBody {String} price Soap price
 * @apiBody {String} description Soap description
 * @apiBody {String} count Soap count
 * @apiBody {String} image Soap main image
 * @apiBody {Object} colors Soap additional image 
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *       name: "Мильний букет 'Ромашка'",
 *       price: 500,
 *       description: "Квітково- мильна композиція створить хороший настрій , комфорт та затишок",
 *       count: 10,
 *       image: "https://images.prom.ua/3392593739_w1280_h1280_image?fresh=1",
 *       colors: {
 *           "pink": "https://images.prom.ua/3392594848_w1280_h1280_image?fresh=1",
 *           "orange": "https://images.prom.ua/3392595149_w1280_h1280_image?fresh=1"
 *       },
 *       _id: "63f38bc1e2190e67d72b7ee8",
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
router.post("/", authMiddleware, accessMiddleware, soapController.createSoap);


/**
 * @api {patch} /soap/:id Update soap by id
 * @apiVersion 1.0.0
 * @apiName UpdateSoapById
 * @apiGroup Soap
 *
 * @apiParam {String} id Soap id
 * 
 * @apiBody {String} name Soap name
 * @apiBody {String} price Soap price
 * @apiBody {String} description Soap description
 * @apiBody {String} count Soap count
 * @apiBody {String} image Soap main image
 * @apiBody {Object} colors Soap additional image 
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *       name: "Мильний букет 'Ромашка'",
 *       price: 500,
 *       description: "Квітково- мильна композиція створить хороший настрій , комфорт та затишок",
 *       count: 10,
 *       image: "https://images.prom.ua/3392593739_w1280_h1280_image?fresh=1",
 *       colors: {
 *           "pink": "https://images.prom.ua/3392594848_w1280_h1280_image?fresh=1",
 *           "orange": "https://images.prom.ua/3392595149_w1280_h1280_image?fresh=1"
 *       },
 *       _id: "63f38bc1e2190e67d72b7ee8",
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
router.patch(
  "/:id",
  authMiddleware,
  accessMiddleware,
  soapController.patchSoap
);

/**
 * @api {get} /soap Get all soap list
 * @apiVersion 1.0.0
 * @apiName GetAllSoapList
 * @apiGroup Soap
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *       name: "Мильний букет 'Ромашка'",
 *       price: 500,
 *       description: "Квітково- мильна композиція створить хороший настрій , комфорт та затишок",
 *       count: 10,
 *       image: "https://images.prom.ua/3392593739_w1280_h1280_image?fresh=1",
 *       colors: {
 *           "pink": "https://images.prom.ua/3392594848_w1280_h1280_image?fresh=1",
 *           "orange": "https://images.prom.ua/3392595149_w1280_h1280_image?fresh=1"
 *       },
 *       _id: "63f38bc1e2190e67d72b7ee8",
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
router.get("/", soapController.getAllSoap);

/**
 * @api {get} /soap/:id Get soap by id
 * @apiVersion 1.0.0
 * @apiName GetSoapById
 * @apiGroup Soap
 *
 * @apiParam {String} id Soap id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 * [
 * {
 *  name: "Мильний букет 'Ромашка'",
 *       price: 500,
 *       description: "Квітково- мильна композиція створить хороший настрій , комфорт та затишок",
 *       count: 10,
 *       image: "https://images.prom.ua/3392593739_w1280_h1280_image?fresh=1",
 *       colors: {
 *           "pink": "https://images.prom.ua/3392594848_w1280_h1280_image?fresh=1",
 *           "orange": "https://images.prom.ua/3392595149_w1280_h1280_image?fresh=1"
 *       },
 *       _id: "63f38bc1e2190e67d72b7ee8",
 * },
 * ...
 * ]
 *      
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
router.get("/:id", soapController.getSoapById);

module.exports = router;
