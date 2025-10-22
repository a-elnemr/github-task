import axios from 'axios';
import { BASE_URL } from './baseurl';

export async function fetchRepositories({
  language,
  createdFrom,
  per_page,
}: {
  language: string;
  createdFrom: string;
  per_page: number;
}) {
  const query = `language:${language}+created:>${createdFrom}`;
  const url = `${BASE_URL}?q=${query}&sort=stars&order=desc&per_page=${per_page}`;
  const { data } = await axios.get(url);
  return data.items;
}
