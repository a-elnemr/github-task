import { GitHubSearchResponse } from '../reducers/repositories';

export const FETCH_REPOSITORIES_REQUEST = 'FETCH_REPOSITORIES_REQUEST';
export const FETCH_REPOSITORIES_FAILURE = 'FETCH_REPOSITORIES_FAILURE';
export const FETCH_REPOSITORIES_WITH_NO_FILTER_SUCCESS =
  'FETCH_REPOSITORIES_WITH_NO_FILTER_SUCCESS';
export const FETCH_REPOSITORIES_WITH_FILTER_SUCCESS =
  'FETCH_REPOSITORIES_WITH_FILTER_SUCCESS';

export interface FetchRepositoriesRequestAction {
  type: typeof FETCH_REPOSITORIES_REQUEST;
  [key: string]: any;
}

export interface FetchRepositoriesWithNoFilterSuccessAction {
  type: typeof FETCH_REPOSITORIES_WITH_NO_FILTER_SUCCESS;
  payload: GitHubSearchResponse;
  [key: string]: any;
}
export interface FetchRepositoriesWithFilterSuccessAction {
  type: typeof FETCH_REPOSITORIES_WITH_FILTER_SUCCESS;
  payload: GitHubSearchResponse;
  [key: string]: any;
}

export interface FetchRepositoriesFailureAction {
  type: typeof FETCH_REPOSITORIES_FAILURE;
  payload: string;
  [key: string]: any;
}

export type RepositoriesAction =
  | FetchRepositoriesRequestAction
  | FetchRepositoriesWithNoFilterSuccessAction
  | FetchRepositoriesWithFilterSuccessAction
  | FetchRepositoriesFailureAction;

export const startFetchingRepositories =
  (): FetchRepositoriesRequestAction => ({
    type: FETCH_REPOSITORIES_REQUEST,
  });

export const fetchRepositoriesWithNoFilterSuccessAction = (
  data: GitHubSearchResponse,
): FetchRepositoriesWithNoFilterSuccessAction => ({
  type: FETCH_REPOSITORIES_WITH_NO_FILTER_SUCCESS,
  payload: data,
});
export const fetchRepositoriesWithFilterSuccessAction = (
  data: GitHubSearchResponse,
): FetchRepositoriesWithFilterSuccessAction => ({
  type: FETCH_REPOSITORIES_WITH_FILTER_SUCCESS,
  payload: data,
});

export const fetchRepositoriesFailureAction = (
  error: string,
): FetchRepositoriesFailureAction => ({
  type: FETCH_REPOSITORIES_FAILURE,
  payload: error,
});
