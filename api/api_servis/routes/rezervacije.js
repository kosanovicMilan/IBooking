const express = require("express");
const { sequelize, Lojaliti,Ponude,Kategorije,DodatneOpcije,Korisnici,Objekti,Lokacije,Rezervacije } = require("../../models");
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
         const rezervacije = await Rezervacije.findAll();
         return res.json(rezervacije);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
         const rezervacije = await Rezervacije.findByPk(req.params.id);
         return res.json(rezervacije);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
         const novi = await Rezervacije.create(req.body);
         return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
        const izmena = await Rezervacije.findByPk(req.params.id);
        izmena.destinacija = req.body.destinacija;
        izmena.ponude_id = req.body.ponude_id;
        izmena.korisnici_id = req.body.korisnici_id;
        izmena.save();

        return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
     const obrisani = await Rezervacije.findByPk(req.params.id);
     obrisani.destroy();
     return res.json(obrisani.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });