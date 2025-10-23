import { API_URL } from '../config/constants';
import axios from 'axios';
import { GitHubSearchResponse } from '../store/reducers/repositories';

export const fetchRepositories = async (
  date?: string,
  language?: string,
): Promise<GitHubSearchResponse> => {
  try {
    let query = 'created:>2019-01-10';

    if (date) {
      query = `created:>${date}`;
    }

    if (language && language !== 'Any') {
      query += `+language:${language}`;
    }

    const response = await axios.get<GitHubSearchResponse>(
      `${API_URL}?q=${query}&sort=stars&order=desc&per_page=100`,
    );

    return response.data;
  } catch (err) {
    console.error('RepositoryService: Error fetching repositories', err);
    throw new Error(
      err instanceof Error
        ? err.message
        : 'An error occurred while fetching repositories',
    );
  }
};
