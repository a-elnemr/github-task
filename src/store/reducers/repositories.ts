import {
  FETCH_REPOSITORIES_REQUEST,
  FETCH_REPOSITORIES_FAILURE,
  FETCH_REPOSITORIES_WITH_NO_FILTER_SUCCESS,
  FETCH_REPOSITORIES_WITH_FILTER_SUCCESS,
  RepositoriesAction,
} from '../actions/repositoriesActions';

export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
}

export interface GitHubSearchResponse {
  total_count: number;
  items: GitHubRepository[];
}

export interface RepositoriesState {
  repositories: GitHubRepository[];
  filteredRepositories: GitHubRepository[];
  totalCount: number;
  error: string | null;
  loading: boolean;
}

const initialState: RepositoriesState = {
  repositories: [],
  filteredRepositories: [],
  totalCount: 0,
  error: null,
  loading: false,
};

// Reducer
const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: RepositoriesAction,
): RepositoriesState => {
  switch (action.type) {
    case FETCH_REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REPOSITORIES_WITH_NO_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        repositories: action.payload.items,
        totalCount: action.payload.total_count,
        error: null,
      };
    case FETCH_REPOSITORIES_WITH_FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        filteredRepositories: action.payload.items,
        totalCount: action.payload.total_count,
        error: null,
      };
    case FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        loading: false,
        repositories: [],
        totalCount: 0,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default repositoriesReducer;
