import { createSlice } from '@reduxjs/toolkit';
import users from '../../db/users.json';
// import { register, logIn, logOut, getCurrentUser } from './auth-operations';
const guest = users[0]

const authSlice = createSlice({
  name: 'auth',

  initialState: {
    // user: { email: guest.login, password: null },
    user: { email: guest.login, password: null, type: guest.type },
    // type: "guest",
    // token: null,
    isLoggedIn: false,
    isGetCurrentUser: false,
    error: null,
    // isLoading: false,
  },
  reducers:{
    logIn(state, action){
        state.user = action.payload
        state.isLoggedIn = true
        // if(action.payload.email )

    },
    logOut(state, action){
      state.user = { email: guest.login, password: null, type: guest.type }
      state.isLoggedIn = false
    }
  },
//   extraReducers: {
//     [register.pending](state, action) {
//       state.error = null;
//       state.isLoading = true;
//     },
//     [register.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//     [register.rejected](state, action) {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     [logIn.pending](state, action) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [logIn.fulfilled](state, action) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//     },
//     [logIn.rejected](state, action) {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     [logOut.pending](state, action) {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [logOut.fulfilled](state, action) {
//       state.user = { name: null, email: null, password: null };
//       state.token = null;
//       state.isLoggedIn = false;
//       state.isLoading = false;
//     },
//     [logOut.rejected](state, action) {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//     [getCurrentUser.pending](state, action) {
//       state.isFetchingCurrentUser = true;
//       state.isLoading = true;
//       state.error = null;
//     },
//     [getCurrentUser.fulfilled](state, action) {
//       state.user = action.payload;
//       state.isLoggedIn = true;
//       state.isFetchingCurrentUser = false;
//       state.isLoading = false;
//     },
//     [getCurrentUser.rejected](state, action) {
//       state.isFetchingCurrentUser = false;
//       state.isLoading = false;
//     },
//   },
});

export default authSlice.reducer;
export const {logIn, logOut} = authSlice.actions;