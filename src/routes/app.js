const app = require("express")();

/**
 * @api {get} / Health checkout
 * @apiVersion 1.0.0
 * @apiName Health
 * @apiGroup App
 *
 * @apiSuccess {json} object object with payload
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *      status: true,
 *      payload: { isAlive: true },
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
 *        error: error,
 *        description: error,
 *        code: 400 },
 *     }
 */
app.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      error: null,
      payload: {
        isAlive: true
      },
      code: 200,
    });
  } catch (e) {
    const error = "Error while run operation";
    return res.status(500).json({
      status: false,
      payload: null,
      error: {
        error: error,
        description: e.toString(),
      },
      code: 500,
    });
  }
});

module.exports = app;
