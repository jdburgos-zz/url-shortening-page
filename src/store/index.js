/** Dependencies **/
import { configureStore } from '@reduxjs/toolkit';

/** Reducers **/
import authReducer from './auth/auth.reducer';
import shortenLinksReducer from './shorten-links/shorten-links.reducer';

const store = configureStore({
  reducer: {
    auth: authReducer,
    shortenLinks: shortenLinksReducer,
  },
});

export default store;
