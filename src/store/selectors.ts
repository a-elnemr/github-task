import { RootState } from './store';

export const getColorScheme = (state: RootState) => state.theme.colorScheme;

export const getRepositories = (state: RootState) =>
  state.repositories.repositories;
export const getFilteredRepositories = (state: RootState) =>
  state.repositories.filteredRepositories;
