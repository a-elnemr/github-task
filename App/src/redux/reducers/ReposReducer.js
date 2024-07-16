import moment from 'moment';
import {
  GET_FILTERED_BY_LANG_SUCCESS,

  GET_REPOS_FALUER,
  GET_REPOS_SUCCESS,
  REQUEST_REPOS,
  SET_PICKER_VALUE,
  SET_REPOS_LANGUAGE,
  SET_SELECTED_DATE,
  SET_VIEWED_REPOS,

} from '../constants/ActionsTypes';

const intialState = {
  loading: false,
  error: null,
  allRepos: [],
  viewedRepos: [],
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
        viewedRepos: action.payload,
      };


    case GET_REPOS_FALUER:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_VIEWED_REPOS:
      return {
        ...state,
        loading: false,
        viewedRepos: action.payload,
      };

    case SET_REPOS_LANGUAGE:
      return {
        ...state,
        repoLanguages: action.payload,

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
    case GET_FILTERED_BY_LANG_SUCCESS:
      return {
        ...state,
        loading: false,
        filterdRepos: action.payload,
      };

    default:
      return state;
  }
};
export default RepoReducer;
