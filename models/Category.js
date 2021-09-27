const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Category = new Schema({
    nome: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        dafault: Date.now()
    }
});

mongoose.model("category", Category);