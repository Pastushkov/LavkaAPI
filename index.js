const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const { port, dbUrl } = require("./config");
const initDB = require("./services/db");

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use("/", require("./routes"));

app.listen(port, () => {
  initDB(dbUrl);
  console.log(`APP listen on port ${port}`);
});
