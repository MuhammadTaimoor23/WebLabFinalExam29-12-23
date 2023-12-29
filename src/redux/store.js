import { configureStore } from '@reduxjs/toolkit';

import apiReducer from './apiSlices';
 
export const store = configureStore({
  reducer: {
    
    data: apiReducer,
    
  },
});
