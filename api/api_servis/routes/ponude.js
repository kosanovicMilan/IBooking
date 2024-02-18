const express = require("express");
const { sequelize,Ponude,Kategorije,DodatneOpcije,Korisnici,Lojaliti,Objekti,Lokacije,Rezervacije } = require("../../models");
const route = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();
function authToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.status(401).json({ msg: err });
     const nesto = process.env.ACCESS_TOKEN_SECRET;//stalno govori da je undefined
     const statickiToken = "a813f4b05633e1104bbdb008d4bb54f9acc20d74bb51d80ffc870346ac858c95";
	jwt.verify(token, statickiToken, (err, user) => {
	   if (err) return res.status(403).json({ msg: "kaze da nije isti token i .env sto ima:" + token + "iz env:" + nesto });
	   
        if(user.admin == 0){
          return res.status(403).json({ msg: "Samo admin moze da pristupi ovim podacima" });
        }
        req.user = user;
        console.log("uspesna verifikacija" + req.user.admin);
	   next();
	});
  }
route.use(express.json());
route.use(authToken);
route.use(express.urlencoded({extended:true}));

module.exports = route;

route.get("/", async (req, res) => {
    try{
         const svePonude = await Ponude.findAll();
         return res.json(svePonude);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
     const poId = await Ponude.findByPk(req.params.id);
     return res.json(poId);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
     const novi = await Ponude.create(req.body);
     return res.json(novi);
     
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
         const izmena = await Ponude.findByPk(req.params.id);
         izmena.destinacija = req.body.destinacija;
         izmena.lokacije_id = req.body.lokacije_id;
         izmena.kategorije_id = req.body.kategorije_id;
         izmena.datum = req.body.datum;
         izmena.brojDana = req.body.brojDana;
         izmena.brojOsoba = req.body.brojOsoba;
         izmena.cena = req.body.cena;
         izmena.dodatneOpcije_id = req.body.dodatneOpcije_id;
         izmena.save();

         return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
          console.log("POKUSAO SAM DA BRISEM");
         const obrisani = await Ponude.findByPk(req.params.id);
         obrisani.destroy();
         return res.json(obrisani.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 