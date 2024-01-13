import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { basketSlice } from './basket'
import { productsApi } from './cotalogOperations/cotalogOperation'

const middleware = getDefaultMiddleware => [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  }),
  productsApi.middleware
]

const basketPersistConfig = { key: 'basket', storage }

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [basketSlice.name]:persistReducer(basketPersistConfig, basketSlice.reducer)
     //для работы с ЛОкал сторедж используем Персист
  },
  middleware
})
export const persistor = persistStore(store)