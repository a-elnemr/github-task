import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const URL = `https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc`;

export const fetchStars = createAsyncThunk('star/fetchStars', () => {
  return fetch(URL)
    .then(res => res.json())
    .then(({items}) => items);
  // .catch(err => console.log(err));
});

const initialState = {
  isLoading: false,
  stars: [],
  error: '',
  favourites: [],
};

const starSlice = createSlice({
  name: 'star',
  initialState,
  reducers: {
    LangFilter: (state, action) => {
      if (action.payload !== '') {
        state.favourites = [...state.stars];
        state.favourites = state.favourites.filter(
          item => item.language === action.payload,
        );
        console.log('lang filter', action.payload);
      } else {
        state.favourites = [...state.stars];
        console.log('lang if nothing', action.payload);
      }
    },
    DateFilter: (state, action) => {
      let popular = [...state.stars];
      if (action.payload !== '') {
        console.log('date, filter', action.payload);
      } else {
        state.stars = popular;
      }
      // state.stars = state.stars.filter(
      //   item => item.language === action.payload.language,
      // );
    },
    lengthFilter: (state, action) => {
      if (action.payload !== '') {
        state.favourites = [...state.stars];
        state.favourites = state.favourites.splice(0, action.payload);
        // console.log(state.favourites.length, 'length from array');
      } else {
        state.favourites = [...state.stars];
        // console.log(state.favourites.length, 'length');
      }
    },
  },
  extraReducers: {
    [fetchStars.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchStars.fulfilled]: (state, action) => {
      (state.isLoading = false),
        (state.stars = action.payload),
        (state.favourites = action.payload);
    },
    [fetchStars.rejected]: (state, action) => {
      (state.isLoading = false),
        (state.err = `Error Occured ${action.payload.message}`);
    },
  },
});

export const {LangFilter, DateFilter, lengthFilter} = starSlice.actions;
export default starSlice.reducer;
