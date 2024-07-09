import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {act} from 'react';
//get all repositories
export const getAllRepositories = createAsyncThunk('repositories', async () => {
  try {
    const response = await axios.get(
      'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc',
    );
    return response.data.items;
  } catch (error) {
    throw Error('error during fetching data');
  }
});
//filter erpositers by language
export const filterRepositoriesWithLanguage = createAsyncThunk(
  'RepoLanguage',
  async language => {
    try {
      const response = await axios.get(
        'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc',
      );
      const repos = response.data.items;
      if (language === 'Any') {
        return repos;
      } else {
        const filterdRepositories = repos.filter(
          item => item.language === language,
        );
        return filterdRepositories;
      }
    } catch (error) {
      throw Error('Error in filtered repos by language');
    }
  },
);
// filter repositoriers by date
export const filterRepositoriesByDate = createAsyncThunk(
  'ReposDate',
  async date => {
    try {
      const response = await axios.get(
        'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc',
      );
      const repos = response.data.items;
      const filteredRepositories = repos.filter(
        item => item.created_at.split('T')[0] === date,
      );
      return filteredRepositories;
    } catch (error) {
      throw Error('Error in filtered repos by date ');
    }
  },
);
//get top repos
export const getTopRepositories = createAsyncThunk(
  'getTopRepos',
  async number => {
    try {
      const response = await axios.get(
        'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc',
      );
      let repos;
      if (number === '10') {
        repos = response.data.items.slice(0, 10);
      } else if (number === '50') {
        repos = response.data.items.slice(0, 50);
      } else {
        repos = response.data.items.slice(0, 100);
      }
      return repos;
    } catch (error) {
      throw Error('Error during get top repos');
    }
  },
);

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    reposData: [],
    trendingRepos: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllRepositories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload;
      })
      .addCase(getAllRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(filterRepositoriesWithLanguage.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterRepositoriesWithLanguage.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload;
      })
      .addCase(filterRepositoriesWithLanguage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(filterRepositoriesByDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterRepositoriesByDate.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload;
      })
      .addCase(filterRepositoriesByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(getTopRepositories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingRepos = action.payload;
      })
      .addCase(getTopRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default repositoriesSlice.reducer;
