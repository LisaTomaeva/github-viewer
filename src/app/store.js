import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../reducers/combined.js';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    reducers
  },
  middleware: [thunk],
  devTools: true
});
