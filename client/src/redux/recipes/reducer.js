import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { addRecipeAsync, getRecipesAsync } from './thunks';

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
        console.log("payload");
        console.log(action.payload);
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
        state.list.push(action.payload);
      })
      .addCase(addRecipeAsync.rejected, (state, action) => {
        state.addRecipe = REQUEST_STATE.REJECTED;
        state.error = action.error;
      });
  }
});

export default recipesSlice.reducer;
