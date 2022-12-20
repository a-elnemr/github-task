import React from "react"
import { ActivityIndicator, Text } from "react-native"
import { primaryColor } from "../../assets/colors/colors"
import { ExploreContent } from "../../components"
import { useTrendingRepositories } from "../../hooks/queries/trendingRepositories"

export const ExploreHoc = () => {
    const { data, isLoading } = useTrendingRepositories()
    if (isLoading) return <ActivityIndicator style={{ alignSelf: 'center', flex: 1, }} size={35} color={primaryColor} />
    return <>
        <ExploreContent trendingRepos={data?.items} />
    </>

}