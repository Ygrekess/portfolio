import express from "express";
import bodyParser from "body-parser";
/* import cors from "cors"*/
import path from "path";
import router from "./router.js";
import dotenv from "dotenv";

const app = express();

dotenv.config;

app.use(express.json());
// bodyparser
/* app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })); */
app.use(bodyParser.json());

const __dirname = path.resolve();
app.use("/images-site", express.static(path.join(__dirname, "/images-site")));
app.use("/videos-site", express.static(path.join(__dirname, "/videos-site")));

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
);

app.use("/api", router);

app.listen(process.env.PORT || 3001, () => {
  console.log(`Votre serveur est sur le port heroku`);
});
