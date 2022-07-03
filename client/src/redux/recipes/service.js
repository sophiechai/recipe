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
  return response.json();
};

const deleteRecipes = async () => {
  const response = await fetch('http://localhost:3000/recipes', {
    method: 'DELETE',
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }
  return data;
};

const deleteRecipe = async (recipe) => {
  const response = await fetch('http://localhost:3000/recipes/' + recipe.recipe.id, {
    method: 'DELETE',
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

const updateRecipe = async (recipe) => {
  let link = 'http://localhost:3000/recipes/' + recipe.recipe.id;
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
  deleteRecipes: deleteRecipes,
  sortRecipe: sortRecipe,
  updateRecipe: updateRecipe
};