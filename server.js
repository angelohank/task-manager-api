require("module-alias/register");

const express = require("express");
const Router = require("@root/routes/Router");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", Router);

app.listen(5000, () => {
  console.log("app rodando");
});
