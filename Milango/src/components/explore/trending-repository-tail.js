import React from 'react';
import { Text, View } from 'react-native';

export const TrendingRepositoryTail = ({ repo }) => {
    return (
        <View>
            <View style={{ height: 1, width: 340, backgroundColor: '#eff2f2', alignSelf: 'center', marginBottom: 15 }}></View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#5b5b5b', fontFamily: 'SilkaMedium', fontSize: 15 }}>Updated at {repo.updated_at}  </Text>
                <Text style={{ marginLeft: 20, color: '#5b5b5b', fontFamily: 'SilkaMedium', fontSize: 15 }}> {repo.language} </Text>
            </View>
        </View>
    );
};
