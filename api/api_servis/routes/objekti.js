const express = require("express");
const { sequelize, Lojaliti,Ponude,Kategorije,DodatneOpcije,Korisnici,Objekti,Lokacije,Rezervacije } = require("../../models");

const route = express.Router();

/*function authToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) return res.status(401).json({ msg: err });
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
	   if (err) return res.status(403).json({ msg: err });
	   req.user = user;
	   next();
	});
  }*/
route.use(express.json());
//route.use(authToken);
route.use(express.urlencoded({extended:true}));

module.exports = route;

route.get("/", async (req, res) => {
    try{
         const objekti = await Objekti.findAll();
         return res.json(objekti);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
         const objekti = await Objekti.findByPk(req.params.id);
         return res.json(objekti);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
         const novi = await Objekti.create(req.body);
         return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
        const izmena = await Objekti.findByPk(req.params.id);
        izmena.naziv = req.body.naziv;
        izmena.ocena = req.body.ocena;
        izmena.save();

        return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
         const obrisani = await Lokacije.findByPk(req.params.id);
         await obrisani.destroy({firce: true});
         return res.json(obrisani.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });