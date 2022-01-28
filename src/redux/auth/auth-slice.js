import { createSlice } from '@reduxjs/toolkit';
import users from '../../db/users.json';
const guest = users[0]

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    user: { email: guest.login, password: null, type: guest.type },
    isLoggedIn: false,
    isGetCurrentUser: false,
  },
  reducers:{
    logIn(state, action){
        state.user = action.payload
        state.isLoggedIn = true
    },
    logOut(state, action){
      state.user = { email: guest.login, password: null, type: guest.type }
      state.isLoggedIn = false
    }
  },
});

export default authSlice.reducer;
export const {logIn, logOut} = authSlice.actions;