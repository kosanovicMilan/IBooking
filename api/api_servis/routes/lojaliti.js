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
const { sequelize, Lojaliti,Ponude,Kategorije,DodatneOpcije,Korisnici,Objekti,Lokacije,Rezervacije } = require("../../models");

const route = express.Router();

route.use(express.json());
route.use(authToken);
route.use(express.urlencoded({extended:true}));

module.exports = route;

route.get("/", async (req, res) => {
    try{
         const lojaliti = await Lojaliti.findAll();
         return res.json(lojaliti);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
         const lojaliti = await Lojaliti.findByPk(req.params.id);
         return res.json(lojaliti);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
         const novi = await Lojaliti.create(req.body);
         return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
        const izmena = await Lojaliti.findByPk(req.params.id);
        izmena.tip = req.body.tip;
        izmena.save();

        return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
         const obrisani = await Lojaliti.findByPk(req.params.id);
         await obrisani.destroy({firce: true});
         return res.json(obrisani.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });