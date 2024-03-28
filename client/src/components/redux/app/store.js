import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../../DataSlice";


//there is my app store, and ı created one reducer
const rootReducer = {
  user: dataReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;