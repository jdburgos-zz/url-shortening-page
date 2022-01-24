/** Dependencies **/
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/** Interfaces **/
import { IShortenLink } from '../../interfaces/shorten-link.interface';

export interface ShortenLinksState {
  links: IShortenLink[];
}

// @ts-ignore
const links = JSON.parse(localStorage.getItem('shortenLinks'));
const initialShortenLinksState: ShortenLinksState = { links };

const shortenLinksSlice = createSlice({
  name: 'shortenLinks',
  initialState: initialShortenLinksState,
  reducers: {
    setLinks(state: ShortenLinksState, action: PayloadAction<IShortenLink[]>) {
      state.links = action.payload;
    },
  },
});

export const { setLinks } = shortenLinksSlice.actions;

export default shortenLinksSlice.reducer;
