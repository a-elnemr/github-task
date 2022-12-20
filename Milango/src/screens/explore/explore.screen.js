import React from 'react';
import { View } from 'react-native';
import { ExploreHoc } from '../../hoc';
export const Explore = () => {
    return (
        <View style={{ padding: 20, backgroundColor: '#fbfcfe', flex: 1 }}>
            <ExploreHoc />
        </View>
    );
};
