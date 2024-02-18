const express = require("express");
const { sequelize, Kategorije,Ponude,DodatneOpcije,Korisnici,Lojaliti,Objekti,Lokacije,Rezervacije } = require("../../models");

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


 
 
 route.put("/:id", async (req, res) => {
    try{
        const izmena = await Ponude.findByPk(req.params.id);
        izmena.cena = req.body.cena;
        izmena.save();

        return res.json(izmena);
    }catch(err){
         console.log(err);
         res.status(500).json({ error: "Greska", data: err });
    }
 });
 
 
 