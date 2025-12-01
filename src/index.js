const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
const port = 3000

app.set("view engine", "ejs")
app.set("views", "./views")


app.use(bodyParser.json());
/* estas linhas são para leitura de de body.json */
app.use(express.json());
app.use(express.urlencoded());
/* aqui é o acesso exerno do sistema para a api */
app.use(cors({
  origin: ["https://portalnoticiasinfoa.vercel.app", "https://urban-winner-q7vq67647jrwh4g5w-3000.app.github.dev/"], // domínio do seu front
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

//rotas
require('../db/dbconnect')(app);
require('../route/home')(app);
require('../route/getnoticias')(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});