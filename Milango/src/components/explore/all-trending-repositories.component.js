import { FlatList, SafeAreaView } from 'react-native';
import { TrendingRepository } from './explore-trending-repository.component';

export const AllTrendingRepositories = ({ trendingRepos }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={trendingRepos}
                renderItem={item => <TrendingRepository {...item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};
