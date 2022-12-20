import { useQuery } from "react-query"
import { useFetch } from "../../fetchingData/use-fetch.hook"

export const useTrendingRepositories = () => useQuery('repos', useFetch)
