const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    res.render("admin/index")
});

router.get('/post', (req, res) => {
    res.send("Página  de listar postagem");
});

router.get('/category', (req, res) => {
    res.send("Página de cadastro de categoria");
});

module.exports = router;