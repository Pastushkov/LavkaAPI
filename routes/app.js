const app = require("express")();

app.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      status: true,
      error: null,
      payload: {},
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
