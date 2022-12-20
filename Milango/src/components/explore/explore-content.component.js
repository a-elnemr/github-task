import React from "react";
import { Text, View } from "react-native";
import SvgComponent from "../../assets/icons/iconsComponent";
import { AllTrendingRepositories } from "./all-trending-repositories.component";
import { TrendingRepository } from "./explore-trending-repository.component";
import { ExploreTop10 } from "./explore-view-top10.component";

export const ExploreContent = ({ trendingRepos }) => {
    return (
        <View>
            <Text style={{ fontSize: 24, color: '#000001', fontFamily: 'SilkaBold', paddingVertical: 10 }}>Explore popular</Text>
            <ExploreTop10 />
            <AllTrendingRepositories trendingRepos={trendingRepos} />
        </View>
    );
};
