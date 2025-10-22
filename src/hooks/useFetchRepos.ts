import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/reducers';
import { fetchRepositories } from '../api/githubAPI';

export const useFetchRepos = () => {
  const { top, language, createdFrom } = useSelector((s: RootState) => s.app);

  return useQuery({
    queryKey: ['repos', top, language, createdFrom],
    queryFn: () => fetchRepositories({ language, createdFrom, per_page: top }),
  });
};
