import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../reducers/combined.js';

export default configureStore({
  reducer: {
    reducers
  },
});
