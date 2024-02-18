const express = require("express");
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
const { sequelize, Destinacije,Kategorije,Ponude,DodatneOpcije,Korisnici,Lojaliti,Objekti,Lokacije,Rezervacije } = require("../../models");

const route = express.Router();

route.use(express.json());
//route.use(authToken);
route.use(express.urlencoded({extended:true}));

module.exports = route;

route.get("/", async (req, res) => {
    try{
         const destinacija = await Destinacije.findAll();
         return res.json(destinacija);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
        const destinacija = await Destinacije.findByPk(req.params.id);
        
        return res.json(destinacija);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
        console.log("brisanje destinacije");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
        console.log("brisanje destinacije");

        return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
         console.log("brisanje destinacije");
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 