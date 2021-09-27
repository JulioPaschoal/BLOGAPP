const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/Category");
const Category = mongoose.model("category");


router.get('/', (req, res) => {
    res.render("admin/index")
});

router.get('/post', (req, res) => {
    res.send("Página  de listar postagem");
});

router.get('/category', (req, res) => {
    res.render("admin/category");
});

router.post("/category/new", (req, res) => {
    const newCategory = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Category(newCategory).save().then(() => {
        console.log("Categoria salva com sucesso!");
    }).catch((err) => {
        console.log("Erro ao salvar categoria!");
    });
});

router.get('/category/add', (req, res) => {
    res.render("admin/addcategory");
});

module.exports = router;