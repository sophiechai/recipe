const addRecipe = async (recipe) => {
  const response = await fetch('http://localhost:3000/recipes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  
  return data;
};

const getRecipes = async () => {
  const response = await fetch('http://localhost:3000/recipes', {
    method: 'GET'
  });
  console.log("get: ");
  console.log(response.body);
  return response.json();
};

const deleteRecipe = async (recipe) => {
  const response = await fetch('http://localhost:3000/recipes', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

const sortRecipe = async (recipe) => {
  let link = 'http://localhost:3000/recipes/sort/' + recipe.recipe.sortBy;
  const response = await fetch(link, {
    method: 'GET',
  });
  return response.json();
};

// const getOneRecipe = async (recipe) => {
//   console.log("editIndex in service.js " + recipe.recipe.editIndex);
//   let link = 'http://localhost:3000/recipes/' + recipe.recipe.editIndex;
//   const response = await fetch(link, {
//     method: 'GET',
//   });
//   return response.json();
// };

const updateRecipe = async (recipe) => {
  console.log("in PUT");
  console.log(recipe);
  let link = 'http://localhost:3000/recipes/' + recipe.recipe.index;
  const response = await fetch(link, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(recipe)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};

export default {
  addRecipe: addRecipe,
  getRecipes: getRecipes,
  deleteRecipe: deleteRecipe,
  sortRecipe: sortRecipe,
  // getOneRecipe: getOneRecipe,
  updateRecipe: updateRecipe
};