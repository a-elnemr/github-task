import {
  TOGGLE_MODE,
  GET_REPOS_FALUER,
  GET_REPOS_SUCCESS,
  REQUEST_REPOS,
  SET_PICKER_VALUE,
  SET_REPOS_LANGUAGE,
  SET_SELECTED_DATE,
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
export const fetchRepos = () => {
  return async dispatch => {
    dispatch(requestRepos());
    try {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=created:%3E2019-01-10&sort=stars&order=desc',
      );
      const data = await response.json();
      dispatch(getReposSuccess(data.items));
    } catch (error) {
      dispatch(getReposFaluer(error.message));
    }
  };
};
