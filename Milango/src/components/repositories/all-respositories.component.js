import { FlatList, SafeAreaView } from 'react-native';
import { TrendingRepository } from './explore-trending-repository.component';
import { RepositoryCard } from './repository-card.component';

export const AllRepositories = ({ allRepos }) => {
    return (
        <SafeAreaView>
            <FlatList
                data={allRepos}
                renderItem={item => <RepositoryCard {...item} />}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};
