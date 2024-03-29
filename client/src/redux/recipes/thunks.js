import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import RecipeService from './service';

export const getRecipesAsync = createAsyncThunk(
  actionTypes.GET_RECIPES,
  async () => {
    return await RecipeService.getRecipes();
  }
);

export const addRecipeAsync = createAsyncThunk(
  actionTypes.ADD_RECIPE,
  async (recipe) => {
    return await RecipeService.addRecipe({recipe});
  }
);

export const deleteRecipeAsync = createAsyncThunk(
    actionTypes.DELETE_RECIPE,
    async (recipe) => {
        return await RecipeService.deleteRecipe({recipe});
    }
);

export const deleteRecipesAsync = createAsyncThunk(
    actionTypes.DELETE_RECIPES,
    async (recipe) => {
        return await RecipeService.deleteRecipes({recipe});
    }
);

export const sortRecipeAsync = createAsyncThunk(
    actionTypes.FILTER_RECIPE,
    async (recipe) => {
        return await RecipeService.sortRecipe({recipe});
    }
);

export const updateRecipeAsync = createAsyncThunk(
    actionTypes.UPDATE_RECIPE,
    async (recipe) => {
        return await RecipeService.updateRecipe({recipe});
    }
);
