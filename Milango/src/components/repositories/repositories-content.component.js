import React from 'react';
import { Text, View } from 'react-native';
import { AllRepositories } from './all-respositories.component';
import { RepositoriesPickers } from './respositories-pickers.component';

export const RepositoriesContent = ({ allRepos }) => {
    return (
        <View>
            <Text style={{ fontSize: 24, color: '#000001', fontFamily: 'SilkaBold', paddingVertical: 10 }}>Repositories </Text>
            <RepositoriesPickers />
            <AllRepositories allRepos={allRepos} />
        </View>
    );
};
