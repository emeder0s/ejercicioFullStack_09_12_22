const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
let filmSchema= new Schema({
    title: String,
    category: String,
    director: String,
  
});
 
const filmsModel = mongoose.model("films", filmSchema);
module.exports = filmsModel;