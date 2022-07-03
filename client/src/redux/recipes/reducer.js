import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {
  addRecipeAsync,
  deleteRecipeAsync,
  deleteRecipesAsync,
  getRecipesAsync,
  sortRecipeAsync,
  updateRecipeAsync
} from './thunks';

const INITIAL_STATE = {
  list: [],
  getRecipes: REQUEST_STATE.IDLE,
  addRecipe: REQUEST_STATE.IDLE,
  error: null
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRecipesAsync.pending, (state) => {
        state.getRecipes = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getRecipesAsync.fulfilled, (state, action) => {
        state.getRecipes = REQUEST_STATE.FULFILLED;
        state.list = action.payload;
      })
      .addCase(getRecipesAsync.rejected, (state, action) => {
        state.getRecipes = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(addRecipeAsync.pending, (state) => {
        state.addRecipe = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addRecipeAsync.fulfilled, (state, action) => {
        state.addRecipe = REQUEST_STATE.FULFILLED;
        // state.list.push(action.payload);
        state.list = action.payload;
      })
      .addCase(addRecipeAsync.rejected, (state, action) => {
        state.addRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })

      .addCase(deleteRecipeAsync.pending, (state) => {
      state.deleteRecipe = REQUEST_STATE.PENDING;
      state.error = null;
      })
        .addCase(deleteRecipeAsync.fulfilled, (state, action) => {
          state.deleteRecipe = REQUEST_STATE.FULFILLED;
          state.list = action.payload;
        })
        .addCase(deleteRecipeAsync.rejected, (state, action) => {
          state.deleteRecipe = REQUEST_STATE.REJECTED;
          state.error = action.error;
        })

        .addCase(deleteRecipesAsync.pending, (state) => {
          state.deleteRecipes = REQUEST_STATE.PENDING;
          state.error = null;
        })
        .addCase(deleteRecipesAsync.fulfilled, (state, action) => {
          state.deleteRecipes = REQUEST_STATE.FULFILLED;
          state.list = action.payload;
        })
        .addCase(deleteRecipesAsync.rejected, (state, action) => {
          state.deleteRecipes = REQUEST_STATE.REJECTED;
          state.error = action.error;
        })

        .addCase(updateRecipeAsync.pending, (state) => {
          state.updateRecipe = REQUEST_STATE.PENDING;
          state.error = null;
        })
        .addCase(updateRecipeAsync.fulfilled, (state, action) => {
          state.updateRecipe = REQUEST_STATE.FULFILLED;
          state.list = action.payload;
        })
        .addCase(updateRecipeAsync.rejected, (state, action) => {
          state.updateRecipe = REQUEST_STATE.REJECTED;
          state.error = action.error;
        })

        .addCase(sortRecipeAsync.pending, (state) => {
          state.sortRecipe = REQUEST_STATE.PENDING;
          state.error = null;
        })
        .addCase(sortRecipeAsync.fulfilled, (state, action) => {
          state.sortRecipe = REQUEST_STATE.FULFILLED;
          state.list = action.payload;
        })
        .addCase(sortRecipeAsync.rejected, (state, action) => {
          state.sortRecipe = REQUEST_STATE.REJECTED;
          state.error = action.error;
        })
  }
});

export default recipesSlice.reducer;
