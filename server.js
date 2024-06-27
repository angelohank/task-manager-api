require("module-alias/register");

const express = require("express");
const Router = require("@root/routes/Router");
const cors = require("cors");
const SwaggerDocument = require("@root/config/swagger-doc");
const SwaggerUI = require("swagger-ui-express");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(SwaggerDocument));

app.use("/api", Router);

app.listen(5000, () => {
  console.log("app rodando");
});
