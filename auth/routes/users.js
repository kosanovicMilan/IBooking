const express = require("express");
const { sequelize, Users } = require("../../models");

const route = express.Router();

route.use(express.json());
route.use(express.urlencoded({extended:true}));

module.exports = route;

route.get("/", async (req, res) => {
    try{
         const useri = await Users.findAll();
         return res.json(useri);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });

 route.get("/:id", async (req, res) => {
    try{
        const user = await Users.findByPk(req.params.id);
        
        return res.json(user);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.post("/", async (req, res) => {
    try{
        const novi = await Users.create(req.body);
         return res.json(novi);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.put("/:id", async (req, res) => {
    try{
        const izmena = await Users.findByPk(req.params.id);
        izmena.username = req.body.username;
        izmena.password = req.body.password;
        izmena.admin = req.body.admin;
        izmena.email = req.body.email;
        izmena.save();

        return res.json(izmena);

        return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 route.delete("/:id", async (req, res) => {
    try{
        const obrisani = await Users.findByPk(req.params.id);
        obrisani.destroy();
        return res.json(obrisani.id);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 