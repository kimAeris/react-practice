import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage, // LocalStorage
  // whiteList: [], // 여러 reducer 중에 해당 reducer만 localstorage에 저장
  // blackList: [], // 해당 reducer를 localstorage에서 제외
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, // { user: userReducer,},
  // 기본적으로 redux toolkit에서 제공해주는 middleware를 받아 serializableCheck를 설정함
  // 직렬화가 불가능한 값 전달을 허락함
  // 직렬화 : object -> string (stringify)
  // 직렬화 x : Promise, Function, Symbol 등
  // ==> 직렬화 가능한 값만 넣어주길 권장 !
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // false로만 해도 되지만 redux persist 사용시에만 막아줌
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
