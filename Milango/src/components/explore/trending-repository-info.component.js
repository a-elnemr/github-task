import React from 'react';
import { Text, View } from 'react-native';
import { Book } from '../../assets/icons/iconsComponent';

export const TrendingRepositoryInfo = ({ repo }) => {
    return (
        <View style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: 'row', paddingBottom: 10 }}>
                <Book />
                <Text style={{ color: '#210783', fontFamily: 'SilkaBold', fontSize: 20, paddingStart: 5 }}>{repo.name}</Text>
            </View>
            {repo.description ?
                <Text style={{ color: '#878787', fontFamily: 'SilkaMedium', lineHeight: 22, fontSize: 16 }}>{repo.description} </Text>
                :
                <Text>There is no description</Text>}
        </View>
    );
};

