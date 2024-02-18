const express = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config();

function authToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.status(401).json({ msg: err });
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	   if (err) return res.status(403).json({ msg: err });
	   req.user = user;
	   next();
	});
  }
const { sequelize,Karisnici, Ponude,Kategorije,DodatneOpcije,Lojaliti,Objekti,Lokacije,Rezervacije } = require("../../models");
const Korisnici = require("../../seeders/5-korisnici");

const route = express.Router();

route.use(express.json());
route.use(authToken);
route.use(express.urlencoded({extended:true}));

module.exports = route;

route.get("/", async (req, res) => {
    try{
         const kor = await Korisnici.findAll();
         return res.json(kor);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
         const kor = await Korisnici.findByPk(req.params.id);
         return res.json(kor);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
        const novi = await Korisnici.create(req.body);
        return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
         const izmena = await Korisnici.findByPk(req.params.id);
         izmena.ime = req.body.ime;
         izmena.prezime = req.body.prezime;
         izmena.brojTelefona = req.body.brojTelefona;
         izmena.email = req.body.email;
         izmena.adresa = req.body.adresa;
         izmena.lojaliti_id = req.body.lojaliti_id;
         izmena.save();

         return res.json(izmena);

    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
        const obrisani = Korisnici.findByPk(req.params.id);
        await obrisani.destroy({force: true});
        return res.json(obrisani.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 