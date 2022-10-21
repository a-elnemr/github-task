import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const URL = `https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc`;

export const fetchStars = createAsyncThunk('star/fetchStars', () => {
  return fetch(URL)
    .then(res => res.json())
    .then(({items}) => items)
    .catch(err => console.log(err));
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
      } else {
        state.favourites = [...state.stars];
      }
    },
    DateFilter: (state, action) => {
      if (action.payload !== '') {
        console.log('date, filter', typeof action.payload, action.payload);
        state.favourites = [...state.stars];
        state.favourites = state.favourites.filter(
          item =>
            parseInt(new Date(item.updated_at).getHours()) ==
            parseInt(action.payload),
        );
      } else {
        state.favourites = [...state.stars];
      }
    },
    lengthFilter: (state, action) => {
      if (action.payload !== '') {
        state.favourites = [...state.stars];
        state.favourites = state.favourites.splice(0, action.payload);
      } else {
        state.favourites = [...state.stars];
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
