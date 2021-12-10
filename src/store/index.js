/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import shortenLinksReducer from './shorten-links/shorten-links.reducer';

const store = configureStore({
  reducer: {
    shortenLinks: shortenLinksReducer,
  },
});

export default store;
