import {
  GET_REPOS_FALUER,
  GET_REPOS_SUCCESS,
  REQUEST_REPOS,
  SET_PICKER_VALUE,
} from '../constants/ActionsTypes';

const intialState = {
  loading: false,
  error: null,
  allRepos: [],
  viewedRepos: [],
  pickerValue: 10,
};

const RepoReducer = (state = intialState, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        allRepos: action.payload,
        viewedRepos: action.payload.slice(0, state.pickerValue),
      };
    case GET_REPOS_FALUER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_PICKER_VALUE:
      return {
        ...state,
        pickerValue: action.payload,
        viewedRepos: state.allRepos.slice(0, action.payload),
      };
    default:
      return state;
  }
};
export default RepoReducer;
