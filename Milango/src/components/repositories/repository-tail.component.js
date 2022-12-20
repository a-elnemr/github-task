import React from 'react';
import { Text, View } from 'react-native';
import { Star } from '../../assets/icons/iconsComponent';
import { Seperator } from '../../common/seperator';

export const RepositoryTail = ({ repo }) => {
    return (
        <View>
            <Seperator />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: '#343434', fontFamily: 'SilkaMedium', fontSize: 14, marginEnd: 20 }}>{repo.language}</Text>
                <Star />
                <Text style={{ color: '#2d1390', fontFamily: 'SilkaBold' }}>{repo.stargazers_count}  </Text>
            </View>
        </View>
    );
};
