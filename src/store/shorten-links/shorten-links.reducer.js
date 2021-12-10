/** Dependencies **/
import { createSlice } from '@reduxjs/toolkit';

const initialShortenLinksState = { links: [] };

const shortenLinksSlice = createSlice({
  name: 'shortenLinks',
  initialState: initialShortenLinksState,
  reducers: {
    setLinks(state, action) {
      state.links = action.payload;
    },
  },
});

export const shortenLinksActions = shortenLinksSlice.actions;

export default shortenLinksSlice.reducer;
