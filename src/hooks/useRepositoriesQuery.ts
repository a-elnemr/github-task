import { useQuery } from '@tanstack/react-query';
import { fetchRepositories } from '../services/repositoryService';
import { useDispatch } from 'react-redux';
import {
  fetchRepositoriesWithFilterSuccessAction,
  fetchRepositoriesWithNoFilterSuccessAction,
} from '../store/actions/repositoriesActions';

export const useRepositoriesQuery = (date?: string, language?: string) => {
  const queryKey = ['repositories', date, language];
  const dispatch = useDispatch();

  return useQuery({
    queryKey,
    queryFn: async () => {
      const data = await fetchRepositories(date, language);

      if (date || language) {
        dispatch(fetchRepositoriesWithFilterSuccessAction(data));
      } else {
        dispatch(fetchRepositoriesWithNoFilterSuccessAction(data));
      }

      return data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    enabled: true,
  });
};
