const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');
const queries = require("../queries");

router.get('/', async function (req, res, next) {
  const recipes = await queries.getAllRecipes({});
  return res.send(recipes);
});

router.get('/sort/:sortBy', async function (req, res, next) {
  let filterBy = req.params.sortBy;
  let recipes = await queries.getAllRecipes({});
  if (filterBy === "time") {
    recipes = recipes.sort(function (a, b) {
      return a.time - b.time
    });
  } else if (filterBy === "name") {
    recipes = recipes.sort(function (a, b) {
      return a.title.localeCompare(b.title);
    });
  }
  return res.send(recipes);
});

router.delete('/', async function (req, res, next) {
  await queries.deleteAllRecipes({});
  const recipes = await queries.getAllRecipes({});
  return res.send(recipes);
});

router.delete('/:id', async function (req, res, next) {
  let id = req.params.id;
  await queries.deleteOneRecipe(id);
  const recipes = await queries.getAllRecipes({});
  return res.send(recipes);
});

router.post('/', async function (req, res, next) {
  const newRecipe = {
    title: req.body.recipe.title, ingredients: req.body.recipe.ingredients,
    instructions: req.body.recipe.instructions, image: req.body.recipe.image, tips: req.body.recipe.tips,
    time: req.body.recipe.time
  };
  // recipes.push(recipe);
  await queries.insertOneRecipe([newRecipe])[0];
  const recipes = await queries.getAllRecipes({});
  return res.send(recipes);
});

router.put('/:id', async function (req, res, next) {
  let id = req.params.id;
  const recipe = {
    title: req.body.recipe.inputs.title,
    ingredients: req.body.recipe.inputs.ingredients,
    instructions: req.body.recipe.inputs.instructions,
    image: req.body.recipe.inputs.image,
    tips: req.body.recipe.inputs.tips,
    time: req.body.recipe.inputs.time
  };

  await queries.updateOneRecipe(id, recipe);
  const recipes = await queries.getAllRecipes({});
  return res.send(recipes);
});
module.exports = router;