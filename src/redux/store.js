// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
//   } from 'redux-persist';
  import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
  import authReducer from '../redux/auth/auth-slice';
  import newsReducer from '../redux/news/news-slice';

//   const middleware = [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ];

  const store = configureStore({
    reducer: {
      auth: authReducer,
      news: newsReducer,
    },
    // middleware,
    devTools: process.env.NODE_ENV === 'development',
  });

  export { store};