const fs = require("fs");
const path = require("path");

const start = () => {
  const src = path.join(__dirname, "../../src");
  const controllers = path.join(__dirname, "../../src/Controllers");
  const models = path.join(__dirname, "../../src/models");
  const routes = path.join(__dirname, "../../src/routes");
  const views = path.join(__dirname, "../../src/views");
  const config = path.join(__dirname, "../../src/config");
  const configFile = path.join(__dirname, "../../src/config/config.js");
  const routeIndexFile = path.join(__dirname, "../../src/routes/index.js");
  const indexFile = path.join(__dirname, "../../index.js");

  const routesIndexText =
    'const express = require("express");const router = express.Router();module.exports = router;';
  const configFileText = "module.exports={}";
  const indexFileText =
    'const express = require("express");const app = express();app.use(express.json());app.get("/", (req, res) => {res.status(200).json({status: "success",message: "Server running successfully",});});const routes = require("./src/routes");app.use(routes);const port = process.env.PORT || 5000;app.listen(port, () => {console.log(`Server is ready at ${port}`);});';
  if (!fs.existsSync(src)) {
    fs.mkdirSync(src);
  }
  if (!fs.existsSync(controllers)) {
    fs.mkdirSync(controllers);
  }
  if (!fs.existsSync(models)) {
    fs.mkdirSync(models);
  }
  if (!fs.existsSync(routes)) {
    fs.mkdirSync(routes);
  }
  if (!fs.existsSync(views)) {
    fs.mkdirSync(views);
  }
  if (!fs.existsSync(config)) {
    fs.mkdirSync(config);
  }
  if (!fs.existsSync(routeIndexFile)) {
    fs.appendFileSync(routeIndexFile, routesIndexText, (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(indexFile)) {
    fs.appendFileSync(indexFile, indexFileText, (err) => {
      if (err) throw err;
    });
  }
  if (!fs.existsSync(configFile)) {
    fs.appendFileSync(configFile, configFileText, (err) => {
      if (err) throw err;
    });
  }
};
module.exports = { start };
