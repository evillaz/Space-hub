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
  reducers: {
    makeReservation: (state, action) => {
      const newState = state;
      const rocket = newState.rockets.find((rocket) => rocket.id === action.payload);
      rocket.reserved = true;
    },
    cancelReservation: (state, action) => {
      const newState = state;
      const rocket = newState.rockets.find((rocket) => rocket.id === action.payload);
      rocket.reserved = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.fulfilled, (state, action) => ({
        ...state,
        rockets: action.payload,
      }));
  },
});

export const { makeReservation, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
