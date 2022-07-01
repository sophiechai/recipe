const express = require('express');
let bodyParser = require('body-parser')
const router = express.Router();
const { v4: uuid } = require('uuid');

// let urlencodedParser = bodyParser.urlencoded({ extended: false })

let recipes = [
  {
    id: "de382de9-799b-4351-95ed-1dd92c151263",
    title: "GRILLED BASIL CHICKEN",
    ingredients:
        "¾ cup balsamic vinegar; ¼ cup tightly packed fresh basil leaves, orange quote icon gently rub produce under cold running water.; 2 tbsp olive oil; 1 garlic clove, minced; ½ tsp salt; 4 plum tomatoes, scrubbed with clean vegetable brush under running water.; 4 boneless skinless chicken breast halves (4 ounces each)",
    instructions:
        "Wash hands with soap and water.; After washing basil and tomatoes, blot them dry with clean paper towel.; Using a clean cutting board, cut tomatoes into quarters.; For marinade, place first six ingredients in a blender. Cover and process until well blended.; Place chicken breasts in a shallow dish; orange quote icon do not rinse raw poultry. Cover with marinade. Cover dish. Refrigerate about 1 hour, turning occasionally. orange quote icon Wash dish after touching raw poultry.; Wash hands with soap and water after handling uncooked chicken.; Place chicken on an oiled grill rack over medium heat. orange quote icon Do not reuse marinades used on raw foods. Grill chicken 4-6 minutes per side. orange quote icon Cook until internal temperature reaches 165 °F as measured with a food thermometer.",
    image:
        "https://www.afamilyfeast.com/wp-content/uploads/2013/07/Grilled-Basil-Garlic-Chicken-3.jpg",
    tips: "",
    time: 80
  },
  {
    id: "346b79b9-0aed-44de-9bfd-8e7dbd7c8964",
    title: "VICTORIA SPONGE",
    ingredients:
        "3 medium eggs; 175g (6oz) butter, softened; 175g (6oz) caster sugar; 175g (6oz) self-raising flour; 142ml carton double cream; 4-6 level tablespoons raspberry jam; caster sugar, for dredging; 2 x 18cm (7in) round sandwich tins, greased and base lined with baking parchment",
    instructions:
        "Tip all the ingredients into a bowl and beat until smooth. Divide mixture between the sandwich tins and level the surfaces.; Bake the cakes in the centre of a preheated oven – 180°C/350°F/Gas Mark 4 for 20-25 mins, or until the cakes have risen and are golden, and spring back when lightly pressed in the centre.; Remove the cakes from the oven and leave them to cool in the tins for 5-10 mins, then turn them out on to a wire rack and leave them to cool completely.; Spread the jam over the base of one of the cakes. Lightly whip the double cream and spread it over the base of the other cake. Sandwich the two cakes together. Dredge with caster sugar before serving.; The unfilled Victoria sponge cakes can be packed in freezer bags and frozen for up to 3 months. Allow to defrost before filling.",
    image:
        "https://images.food52.com/Btf1eMV0NCd5A94NZ5_c7i4lmHw=/1200x675/8caf639e-c2d2-480e-8832-980a308133d3--2021-0525_victoria-sponge-cake_3x2_rocky-luten_015.jpg",
    tips: "",
    time: 100
  },
  {
    id: "9457d5d5-c6d7-47b2-8b38-041c19d5fa6f",
    title: "CHICKEN AND MUSHROOM PIE",
    ingredients:
        "55g (2oz) butter; 1 onion, peeled and sliced; 300g (10½ oz) mushrooms, halved; 2 garlic cloves, peeled and chopped; 2tbsp chopped fresh thyme; 40g (1½ oz) plain flour; 150ml (5fl oz) dry white wine; 300ml (10fl oz) chicken stock; 4 ready-roasted chicken breasts, cubed; 142ml pot double cream",
    instructions:
        "Preheat the oven to 200°C (400°F, gas mark 6). Heat the butter in a large saucepan, add the onion and cook over a medium heat for 5 mins. Add the mushrooms and cook for a further 5 mins. Add the garlic and thyme and fry for 3 mins. Stir in the flour and cook, stirring, for a further 5 mins.; Add the white wine and the chicken stock, bring to the boil and simmer until thickened.; Stir in the chicken, simmer for 5 mins, add the cream and season.; Spoon into four ovenproof dishes and top with circles of pastry. Trim the edges and brush with the beaten egg. Top each with a sprig of thyme. Bake for 15 mins until risen.; Serve your chicken and mushroom pies, still warm from the open, with a big spoon on creamy mash and minted peas.",
    image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2019/03/Chicken-and-mushroom-pie-with-bacon-square-FS.jpg",
    tips: "",
    time: 30
  }
];

router.get('/', function (req, res, next) {
  return res.send(recipes);
});

// router.get('/:editIndex', function (req, res, next) {
//   let index = req.params.editIndex;
//   console.log("index in recipes.js " + index);
//   console.log(JSON.stringify(recipes[index].title));
//   return res.send(recipes[index]);
// });

router.get('/sort/:sortBy', function (req, res, next) {
  let filterBy = req.params.sortBy;
  if (filterBy === "time") {
    recipes = recipes.sort(function(a, b) {return a.time - b.time});
  } else if (filterBy === "name") {
    recipes = recipes.sort(function(a, b) {return a.title.localeCompare(b.title);});
  }
  return res.send(recipes);
});

router.delete('/', function (req, res, next) {

  let index = parseInt(req.body.recipe.index);
  if (index === -2) {
    recipes = [];
  } else {
    recipes.splice(index, 1);
  }
  return res.send(recipes);
});

router.post('/', function (req, res, next) {
  const recipe = { id: uuid(), title: req.body.recipe.title, ingredients: req.body.recipe.ingredients,
    instructions: req.body.recipe.instructions, image: req.body.recipe.image, tips: req.body.recipe.tips,
    time: req.body.recipe.time};
  recipes.push(recipe);
  return res.send(recipe);
});

router.put('/:index', function (req, res, next) {
  let index = req.params.index;
  const recipe = { id: recipes[index].id, title: req.body.recipe.inputs.title, ingredients: req.body.recipe.inputs.ingredients,
    instructions: req.body.recipe.inputs.instructions, image: req.body.recipe.inputs.image, tips: req.body.recipe.inputs.tips,
    time: req.body.recipe.inputs.time};

  recipes[index] = recipe;

  return res.send(recipe);
});
module.exports = router;