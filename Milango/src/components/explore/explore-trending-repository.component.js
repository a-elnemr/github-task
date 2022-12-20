import React from "react"
import { Text, View } from "react-native"
import { TrendingRepositoryHead } from "./trending-repository-head.component"
import { TrendingRepositoryInfo } from "./trending-repository-info.component"
import { TrendingRepositoryTail } from "./trending-repository-tail"

export const TrendingRepository = ({ item }) => {
    return <View style={{
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 8,
        elevation: 20,
        shadowColor: '#d5d8dc'

    }}>
        <TrendingRepositoryHead repo={item} />
        <TrendingRepositoryInfo repo={item} />
        <TrendingRepositoryTail repo={item} />
    </View>
}
