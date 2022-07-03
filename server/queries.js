const Recipe = require('./model');

const queries = {
    getAllRecipes: async function (filter) {
        // Recipe.find(filter).then(function (err, recipes) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("here");
        //         return recipes;
        //     }
        // });

        const recipes = await Recipe.find(filter);
        return recipes;
    },
    deleteAllRecipes: async function (filter) {
        const recipes = await Recipe.deleteMany(filter);
        return recipes;
        // Recipe.deleteMany(filter).then(function (err) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Successfully deleted all recipes !!");
        //     }
        // });
    },
    deleteOneRecipe: async function (id) {
        const recipe = await Recipe.findByIdAndDelete(id);
        return recipe;
        // Recipe.deleteOne(filter).then(function (err) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Successfully deleted one recipe !!");
        //     }
        // });
    },
    updateOneRecipe: async function (id, obj) {
        const recipes = await Recipe.findByIdAndUpdate(id, obj);
        return recipes;
        // Recipe.replaceOne(filter).then( obj,function (err, res) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log("Successfully updated one recipe !!");
        //     }
        // });
    },
    insertOneRecipe: async function (recipe) {
        const recipes = await Recipe.insertMany(recipe);
        return recipes;
        // Recipe.insertMany(recipe).then( function (err) {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log("Successfully inserted one recipe !!");
        //     }
        // });
    }
}

module.exports = queries;