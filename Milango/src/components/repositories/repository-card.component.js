import React from "react";
import { View } from "react-native";
import { TrendingRepositoryHead } from "../explore/trending-repository-head.component";
import { TrendingRepositoryInfo } from "../explore/trending-repository-info.component";
import { RepositoryTail } from "./repository-tail.component";

export const RepositoryCard = ({ item }) => {
    return <View style={{
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 8,
        elevation: 20,
        shadowColor: '#d5d8dc'

    }}>
        <TrendingRepositoryInfo repo={item} />
        <RepositoryTail repo={item} />
    </View>
}