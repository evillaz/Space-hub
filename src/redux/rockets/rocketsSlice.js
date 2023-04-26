import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
});
const initialState = {
  rockets: [],
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      const newState = state;
      newState.rockets = action.payload;
    },
  },
});

export default rocketsSlice.reducer;
