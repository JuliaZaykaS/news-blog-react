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

//   const middleware = [
//     ...getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   ];

  const store = configureStore({
    reducer: {
    //   auth: authReducer,
    //   news: newsReducer,
    },
    // middleware,
    devTools: process.env.NODE_ENV === 'development',
  });

  export { store};