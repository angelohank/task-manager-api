require("module-alias/register");

const express = require("express");
const Router = require("@root/routes/Router");

const app = express();

app.use("/api", Router);

app.listen(5000, () => {
  console.log("app rodando");
});
