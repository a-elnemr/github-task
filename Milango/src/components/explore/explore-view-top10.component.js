import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

export const ExploreTop10 = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const handleModal = () => setIsModalVisible(() => !isModalVisible);
    return (
        <View
            style={{
                backgroundColor: '#fff',
                alignSelf: 'baseline',
                padding: 12,
                marginVertical: 10,
                borderRadius: 8,
                elevation: 3,
                shadowColor: 'grey',
            }}>
            <TouchableOpacity onPress={handleModal}>
                <Text style={{ color: '#000001', fontFamily: 'SilkaBold', fontSize: 16 }}>
                    <Text
                        style={{
                            fontFamily: 'SilkaMedium',
                            color: 'grey',
                        }}>
                        View:
                    </Text> Top 10
                </Text>
                <ReactNativeModal isVisible={isModalVisible}>
                    <View
                        style={{
                            height: 600,
                            backgroundColor: 'white',
                            borderRadius: 15,
                            padding: 20,
                        }}>
                        <View
                            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: '#000' }}> select Language</Text>
                            <TouchableOpacity onPress={handleModal}>
                                <Text style={{ color: '#000' }}> close icon </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ReactNativeModal>
            </TouchableOpacity>
        </View>
    );
};
