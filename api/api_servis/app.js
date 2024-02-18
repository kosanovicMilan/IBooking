const express = require('express');
const cors = require("cors");
const jwt = require('jsonwebtoken');
require('dotenv').config();

  

const { sequelize, Ponude,Kategorije,DodatneOpcije,Korisnici,Lojaliti,Objekti,Lokacije,Rezervacije } = require("../models");
const app = express();

const corsOptions = {
	origin: ['http://localhost:8000', 'http://127.0.0.1:8000','http://localhost:8080']
  };
  app.use(cors(corsOptions));
  

app.get('/', (req, res) => {
    res.send('Hello from REST API service');
});


const ponudeRoutes = require("./routes/ponude.js");
app.use("/ponude", ponudeRoutes);

const kategorijeRoutes = require("./routes/kategorije.js");
app.use("/kategorije", kategorijeRoutes);

const rezervacijeRoutes = require("./routes/rezervacije.js");
app.use("/rezervacije", rezervacijeRoutes);

const dodatneOpcijeRoutes = require("./routes/dodatneOpcije.js");
app.use("/dodatneOpcije", dodatneOpcijeRoutes);

const korisniciRoutes = require("./routes/korisnici.js");
app.use("/korisnici", korisniciRoutes);

const objektiRoutes = require("./routes/objekti.js");
app.use("/objekti", objektiRoutes);

const lojalitiRoutes = require("./routes/lojaliti.js");
app.use("/lojaliti", lojalitiRoutes);

const lokacijeRoutes = require("./routes/lokacije.js");
app.use("/lokacije", lokacijeRoutes);

const promenaCeneRoutes = require("./routes/promenaCene.js");
app.use("/promenaCene", promenaCeneRoutes);

const destinacijeRoutes = require("./routes/destinacije.js");
app.use("/destinacije", destinacijeRoutes);

const partneriRoutes = require("./routes/partneri.js");
app.use("/partneri", partneriRoutes);

//const usersRoutes = require("./routes/users.js");
//app.use("/users",usersRoutes);






app.listen({ port:9000 }, async () => {
	console.log("Started server on localhost:8000");
	await sequelize.sync({force:false});
	console.log("DB synced");
});
