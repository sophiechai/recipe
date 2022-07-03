const mongoose = require('mongoose');

// create schema
const recipeSchema = new mongoose.Schema({
    title: String,
    ingredients: String,
    instructions: String,
    image: String,
    tips: String,
    time: Number
});

recipeSchema.methods.speak = function speak() {
    console.log(`Recipe named ${this.title}`);
}

// create model
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;