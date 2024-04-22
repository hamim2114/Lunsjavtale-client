import { configureStore } from "@reduxjs/toolkit";
import selectedDateSlice from "./selectedDateSlice";
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
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, selectedDateSlice);

// export const store = configureStore({
//   reducer: {
//     selectedDate: persistedReducer
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store)



export const store = configureStore({
  reducer: {
    selectedDate: selectedDateSlice
  },
})
