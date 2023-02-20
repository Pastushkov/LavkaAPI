const router = require("express")();
const promController = require("../../controllers/prom.controller");

/**
 * @api {get} /prom/products/list?limit=10&last_id=12312313 Get products list from prom
 * @apiVersion 1.0.0
 * @apiName GetProductProm
 * @apiGroup Prom
 *
 * @apiQuery {String} limit Limit of products
 * @apiQuery {String} last_id Last id of product
 * 
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 * [
 * {
 * "id": 1771742406,
 *           "external_id": null,
 *           "name": "Моя тестовая позиция",
 *           "sku": "test",
 *           "keywords": "Тест, Тетсовая позиция, Интеграция",
 *           "presence": "available",
 *           "price": 100,
 *           "minimum_order_quantity": null,
 *           "discount": null,
 *           "prices": [],
 *           "currency": "UAH",
 *           "description": "Это моя тестовая позиция. Това не существует. Я его создал для тестирования и интеграции с апи прома.<br />\nЯ хочу интегрировать апи, для более удобного использования опций прома.",
 *           "group": {
 *               "id": 17459223,
 *               "name": "Корневая группа"
 *           },
 *           "category": {
 *               "id": 1201,
 *               "caption": "легковые автомобили"
 *           },
 *           "main_image": "https://images.prom.ua/4277401712_w200_h200_moya-testovaya-pozitsiya.jpg",
 *           "images": [
 *               {
 *                   "id": 4277401712,
 *                   "thumbnail_url": "https://images.prom.ua/4277401712_w100_h100_moya-testovaya-pozitsiya.jpg",
 *                   "url": "https://images.prom.ua/4277401712_w200_h200_moya-testovaya-pozitsiya.jpg"
 *               },
 *               {
 *                   "id": 4277401685,
 *                   "thumbnail_url": "https://images.prom.ua/4277401685_w100_h100_moya-testovaya-pozitsiya.jpg",
 *                   "url": "https://images.prom.ua/4277401685_w200_h200_moya-testovaya-pozitsiya.jpg"
 *               },
 *               {
 *                   "id": 4277402504,
 *                   "thumbnail_url": "https://images.prom.ua/4277402504_w100_h100_moya-testovaya-pozitsiya.jpg",
 *                   "url": "https://images.prom.ua/4277402504_w200_h200_moya-testovaya-pozitsiya.jpg"
 *               }
 *           ],
 *           "selling_type": "retail",
 *           "status": "not_on_display",
 *           "quantity_in_stock": null,
 *           "measure_unit": "шт.",
 *           "is_variation": false,
 *           "variation_base_id": null,
 *           "variation_group_id": null,
 *           "date_modified": "2023-02-20T14:00:00+00:00",
 *           "regions": [
 *               {
 *                   "id": 194022000,
 *                   "ru": "Каменец-Подольский",
 *                   "uk": "Кам'янець-Подільський"
 *               }
 *           ],
 *           "name_multilang": {
 *               "ru": "Моя тестовая позиция",
 *               "uk": "Моя тестова позиція Updated"
 *           }
 *       },
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
router.get("/list", promController.getProductsList);

/**
 * @api {get} /prom/products/:id Get product from prom by id
 * @apiVersion 1.0.0
 * @apiName GetSoapByIdFromprom
 * @apiGroup Prom
 *
 * @apiParam {String} id Soap id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: 
 *  {
 * "id": 1771742406,
 *           "external_id": null,
 *           "name": "Моя тестовая позиция",
 *           "sku": "test",
 *           "keywords": "Тест, Тетсовая позиция, Интеграция",
 *           "presence": "available",
 *           "price": 100,
 *           "minimum_order_quantity": null,
 *           "discount": null,
 *           "prices": [],
 *           "currency": "UAH",
 *           "description": "Это моя тестовая позиция. Това не существует. Я его создал для тестирования и интеграции с апи прома.<br />\nЯ хочу интегрировать апи, для более удобного использования опций прома.",
 *           "group": {
 *               "id": 17459223,
 *               "name": "Корневая группа"
 *           },
 *           "category": {
 *               "id": 1201,
 *               "caption": "легковые автомобили"
 *           },
 *           "main_image": "https://images.prom.ua/4277401712_w200_h200_moya-testovaya-pozitsiya.jpg",
 *           "images": [
 *               {
 *                   "id": 4277401712,
 *                   "thumbnail_url": "https://images.prom.ua/4277401712_w100_h100_moya-testovaya-pozitsiya.jpg",
 *                   "url": "https://images.prom.ua/4277401712_w200_h200_moya-testovaya-pozitsiya.jpg"
 *               },
 *               {
 *                   "id": 4277401685,
 *                   "thumbnail_url": "https://images.prom.ua/4277401685_w100_h100_moya-testovaya-pozitsiya.jpg",
 *                   "url": "https://images.prom.ua/4277401685_w200_h200_moya-testovaya-pozitsiya.jpg"
 *               },
 *               {
 *                   "id": 4277402504,
 *                   "thumbnail_url": "https://images.prom.ua/4277402504_w100_h100_moya-testovaya-pozitsiya.jpg",
 *                   "url": "https://images.prom.ua/4277402504_w200_h200_moya-testovaya-pozitsiya.jpg"
 *               }
 *           ],
 *           "selling_type": "retail",
 *           "status": "not_on_display",
 *           "quantity_in_stock": null,
 *           "measure_unit": "шт.",
 *           "is_variation": false,
 *           "variation_base_id": null,
 *           "variation_group_id": null,
 *           "date_modified": "2023-02-20T14:00:00+00:00",
 *           "regions": [
 *               {
 *                   "id": 194022000,
 *                   "ru": "Каменец-Подольский",
 *                   "uk": "Кам'янець-Подільський"
 *               }
 *           ],
 *           "name_multilang": {
 *               "ru": "Моя тестовая позиция",
 *               "uk": "Моя тестова позиція Updated"
 *           }
 *       },
 *  
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
router.get("/:id",promController.getProductById)


/**
 * @api {get} /prom/products/translation/:id Get product transaltion from prom by id
 * @apiVersion 1.0.0
 * @apiName GetSoapTranslationByIdFromprom
 * @apiGroup Prom
 *
 * @apiParam {String} id Soap id
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *      "name": "Моя тестова позиція Updated",
 *       "keywords": "Тест, Тестова позиція, Інтеграція",
 *       "description": "UK Це моя тестова позиція. Това є не існуючим."
 *      }
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
router.get("/translation/:id",promController.getTranslationById)

/**
 * @api {put} /prom/products/translation Update product transaltion from prom by id
 * @apiVersion 1.0.0
 * @apiName GetSoapTranslationByIdFromprom
 * @apiGroup Prom
 *
 * @apiBody {String} id Product id
 * @apiBody {String} name Product name
 * @apiBody {String} keywords Product keywords
 * @apiBody {String} description Product description
 * 
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: {
 *      "name": "Моя тестова позиція Updated",
 *       "keywords": "Тест, Тестова позиція, Інтеграція",
 *       "description": "UK Це моя тестова позиція. Това є не існуючим."
 *      }
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
router.put("/translation",promController.updateTranslationById)
module.exports = router