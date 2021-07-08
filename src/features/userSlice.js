import { createSlice } from '@reduxjs/toolkit';
// import { fetchCount } from './counterAPI';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },

  },
  
});

export const { login, logout } = userSlice.actions;

// selectors
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;



/*
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

*/