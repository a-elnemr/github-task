import {
  TOGGLE_MODE,
  GET_REPOS_FALUER,
  GET_REPOS_SUCCESS,
  REQUEST_REPOS,
  SET_PICKER_VALUE,
  SET_REPOS_LANGUAGE,
  SET_SELECTED_DATE,
  GET_FILTERED_BY_LANG_SUCCESS,
  SET_VIEWED_REPOS,
} from '../constants/ActionsTypes';

export const toggleDarkMode = () => ({
  type: TOGGLE_MODE,
});
export const requestRepos = () => ({
  type: REQUEST_REPOS,
});
export const getReposSuccess = repos => ({
  type: GET_REPOS_SUCCESS,
  payload: repos,
});
export const getFilteredByLangSuccess = repos => ({
  type: GET_FILTERED_BY_LANG_SUCCESS,
  payload: repos,
});

export const getReposFaluer = error => ({
  type: GET_REPOS_FALUER,
  payload: error,
});
export const setPickerValue = value => ({
  type: SET_PICKER_VALUE,
  payload: value,
});
export const setReposLanguages = value => ({
  type: SET_REPOS_LANGUAGE,
  payload: value,
});
export const setSelectedDate = value => ({
  type: SET_SELECTED_DATE,
  payload: value,
});

export const setViewedRepo = value => ({
  type: SET_VIEWED_REPOS,
  payload: value,
});
export const fetchTopRepos = () => {
  return async dispatch => {
    dispatch(requestRepos());
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>2019-01-01+stars:>0&sort=stars&order=desc&per_page=100`,
      );
      const data = await response.json();
      dispatch(getReposSuccess(data.items));
    } catch (error) {
      dispatch(getReposFaluer(error.message));
    }
  };
};

export const fetchRepoLanguages = () => {
  return async dispatch => {
    dispatch(requestRepos());
    try {
      let allLanguages = [];
      let allFilteredRepos = [];
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc&page=${page}&per_page=100`,
        );

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          allFilteredRepos = [...allFilteredRepos, ...data.items];

          data.items.forEach(repo => {
            if (repo.language && !allLanguages.includes(repo.language)) {
              allLanguages.push(repo.language);
            }
          });
          page += 1;
        } else {
          hasMore = false;
        }
      }
      dispatch(getFilteredByLangSuccess(allFilteredRepos));
      dispatch(setReposLanguages(allLanguages));
    } catch (error) {
      dispatch(getReposFaluer(error.message));
    }
  };
};
