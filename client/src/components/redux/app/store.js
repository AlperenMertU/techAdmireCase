import { configureStore } from '@reduxjs/toolkit';
import dataReducer from "../../DataSlice";



const rootReducer = {
  user: dataReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;