import moment from 'moment';
import {
  GET_REPOS_FALUER,
  GET_REPOS_SUCCESS,
  REQUEST_REPOS,
  SET_PICKER_VALUE,
  SET_REPOS_LANGUAGE,
  SET_SELECTED_DATE,
} from '../constants/ActionsTypes';

const intialState = {
  loading: false,
  error: null,
  allRepos: [],
  viewedRepos: [],
  pickerValue: 10,
  repoLanguages: [],
  filterdRepos: [],
  pickedLanguage: 'Any',
  pickedDate: moment().format('YYYY-MM-DD'),
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
        filterdRepos: state.allRepos,
        repoLanguages: action.payload
          .map(repo => repo.language)
          .filter(lang => lang),
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
    case SET_REPOS_LANGUAGE:
      return {
        ...state,
        pickedLanguage: action.payload,
        filterdRepos: state.allRepos.filter(
          repo => repo.language == action.payload,
        ),
      };
    case SET_SELECTED_DATE:
      return {
        ...state,
        pickedDate: action.payload,
        filterdRepos: state.allRepos.filter(repo => {
          const repoDate = moment(repo.created_at);
          return repoDate.isSameOrAfter(moment(action.payload, 'YYYY-MM-DD'));
        }),
      };
    default:
      return state;
  }
};
export default RepoReducer;
