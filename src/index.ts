import express from "express";
import * as nunjucks from "nunjucks";
import * as path from "path";
import indexRouter from "./routes/index";
import * as config from "./config";
const app = express();

const viewPath = path.join(__dirname, "views");

nunjucks.configure(viewPath, {
  autoescape: true,
  express: app,
});
app.set("view engine", "html");

app.use("/", indexRouter);

app.listen(config.PORT, () => {
  console.log(`Server is running http://localhost:${config.PORT}/index`);
});
