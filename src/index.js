const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const { port, dbUrl } = require("./config");
const initDB = require("./services/db");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(helmet())

app.use(express.static(__dirname));

app.use("/", require("./routes"));

app.get("/doc", (req, res, next) => {
  try {
    res.sendFile(path.join(__dirname, "../doc", "index.html"));
  } catch (error) {
    console.log(error);
  }
});


app.listen(port, () => {
  initDB(dbUrl);
  console.log(`APP listen on port ${port}`);
});
