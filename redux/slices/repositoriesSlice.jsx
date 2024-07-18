import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
const baseURL = 'https://api.github.com/search/repositories';
const parseLinkHeader = header => {
  const links = {};
  const parts = header.split(',');
  parts.forEach(part => {
    const section = part.split(';');
    if (section.length !== 2) return;
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });

  return links;
};
export const fetchNextPage = createAsyncThunk(
  'repositories/fetchNextPage',
  async (_, {getState, rejectWithValue}) => {
    const {paginationLinks, selectedLanguage} = getState().repository;

    if (!paginationLinks.next) {
      return rejectWithValue('No more pages to fetch');
    }

    try {
      const response = await axios.get(paginationLinks.next);
      const repos = response.data.items;
      const linkHeader = response.headers.link;

      const newPaginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks: newPaginationLinks};
    } catch (error) {
      return rejectWithValue('Error during fetching next page');
    }
  },
);
export const fetchPrevPage = createAsyncThunk(
  'repositories/fetchPrevPage',
  async (_, {getState, rejectWithValue}) => {
    const {paginationLinks, selectedLanguage} = getState().repository;

    if (!paginationLinks.prev) {
      return rejectWithValue('No more pages to fetch');
    }

    try {
      const response = await axios.get(paginationLinks.prev);
      const repos = response.data.items;
      const linkHeader = response.headers.link;

      const newPaginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks: newPaginationLinks};
    } catch (error) {
      return rejectWithValue('Error during fetching next page');
    }
  },
);
export const fetchNextTrend = createAsyncThunk(
  'repositories/fetchNextTRend',
  async (_, {getState, rejectWithValue}) => {
    const {paginationLinks} = getState().repository;

    if (!paginationLinks.next) {
      return rejectWithValue('No more pages to fetch');
    }

    try {
      const response = await axios.get(paginationLinks.next);
      const repos = response.data.items;

      const linkHeader = response.headers.link;

      const newPaginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks: newPaginationLinks};
    } catch (error) {
      return rejectWithValue('Error during fetching next page');
    }
  },
);

export const fetchPrevTrend = createAsyncThunk(
  'repositories/fetchPrevTrend',
  async (_, {getState, rejectWithValue}) => {
    const {paginationLinks} = getState().repository;

    if (!paginationLinks.prev) {
      return rejectWithValue('No more pages to fetch');
    }

    try {
      const response = await axios.get(paginationLinks.prev);
      const repos = response.data.items;
      const linkHeader = response.headers.link;

      const newPaginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks: newPaginationLinks};
    } catch (error) {
      return rejectWithValue('Error during fetching next page');
    }
  },
);
//get all repositories
export const getAllRepositories = createAsyncThunk(
  'repositories/fetchAll',
  async (_, {rejectWithValue}) => {
    try {
      const response = await axios.get(
        `${baseURL}?q=created:%3E2024-03-24&sort=stars&order=desc`,
      );

      const repos = response.data.items;
      const linkHeader = response.headers.link;

      const paginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks};
    } catch (error) {
      return rejectWithValue('Error during fetching data');
    }
  },
);

//filter erpositers by language
export const filterRepositoriesWithLanguage = createAsyncThunk(
  'RepoLanguage',
  async (language, {getState}) => {
    const {paginationLinks} = getState().repository;
    try {
      let query =
        language === 'Any'
          ? 'created:%3E2024-03-24&sort=stars&order=desc'
          : `language:${language}&sort=stars&order=desc`;
      const response = await axios.get(`${baseURL}?q=${query}`);

      let repos = response.data.items;
      const linkHeader = response.headers.link;

      const paginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};

      return {repos, paginationLinks};
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
        `${baseURL}?q=created:%3E${date}&sort=stars&order=desc`,
      );
      const repos = response.data.items;
      // const filteredRepositories = repos.filter(
      //   item => item.created_at.split('T')[0] === date,
      // );
      const linkHeader = response.headers.link;

      const paginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks};
    } catch (error) {
      throw Error('Error in filtered repos by date ');
    }
  },
);
//get top repos
export const getTopRepositories = createAsyncThunk(
  'getTopRepos',

  async (number, {rejectWithValue}) => {
    try {
      let response = await axios.get(
        `${baseURL}?q=created:%3E2024-03-24&sort=stars&order=desc`,
      );

      let repos;
      if (number === '10') {
        repos = response.data.items.slice(0, 10);
      } else if (number === '50') {
        response = await axios.get(
          `${baseURL}?q=created:%3E2024-03-24&sort=stars&order=desc&per_page=50`,
        );
        repos = response.data.items.slice(0, 50);
      } else {
        response = await axios.get(
          `${baseURL}?q=created:%3E2024-03-24&sort=stars&order=desc&per_page=100`,
        );
        repos = response.data.items.slice(0, 100);
      }

      const linkHeader = response.headers.link;

      const paginationLinks = linkHeader ? parseLinkHeader(linkHeader) : {};
      return {repos, paginationLinks};
    } catch (error) {
      return rejectWithValue('Error during fetching data');
    }
  },
);

const repositoriesSlice = createSlice({
  name: 'repositories',
  initialState: {
    reposData: [],
    trendingRepos: [],
    paginationLinks: {},
    selectedLanguage: 'Any',
    loading: false,
    error: null,
  },
  reducers: {
    setSelectedLaanguage: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllRepositories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(getAllRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(fetchNextPage.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNextPage.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(fetchNextPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchPrevPage.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrevPage.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(fetchPrevPage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    //language..
    builder
      .addCase(filterRepositoriesWithLanguage.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterRepositoriesWithLanguage.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(filterRepositoriesWithLanguage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //date...

    builder
      .addCase(filterRepositoriesByDate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(filterRepositoriesByDate.fulfilled, (state, action) => {
        state.loading = false;
        state.reposData = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(filterRepositoriesByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //top
    builder
      .addCase(getTopRepositories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTopRepositories.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingRepos = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(getTopRepositories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNextTrend.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNextTrend.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingRepos = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(fetchNextTrend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(fetchPrevTrend.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPrevTrend.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingRepos = action.payload.repos;
        state.paginationLinks = action.payload.paginationLinks;
      })
      .addCase(fetchPrevTrend.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});
export const {setSelectedLaanguage} = repositoriesSlice.actions;
export default repositoriesSlice.reducer;
