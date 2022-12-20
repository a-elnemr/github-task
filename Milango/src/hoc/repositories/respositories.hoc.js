import React from "react"
import { RepositoriesContent } from "../../components"
import { useTrendingRepositories } from "../../hooks/queries/trendingRepositories"


export const RepositoriesHoc = () => {
    const { data, isLoading } = useTrendingRepositories()
    return <RepositoriesContent allRepos={data?.items} />
}