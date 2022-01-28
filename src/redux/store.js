import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
  import authReducer from '../redux/auth/auth-slice';
  import newsReducer from '../redux/news/news-slice';
  import storage from 'redux-persist/lib/storage';

  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };
  const newsPersistConfig = {
    key: 'news',
    storage,
  };

  const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      news: persistReducer(newsPersistConfig, newsReducer),
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  });

  const persistor = persistStore(store);
  export { store, persistor };