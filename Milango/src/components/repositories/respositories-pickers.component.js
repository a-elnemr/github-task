import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { LanguagesModal } from './languages-modal.component';

export const RepositoriesPickers = () => {
    const [isLanguageModalVisible, setIsLanguageModalVisible] = useState(false);

    const handleModal = () => setIsLanguageModalVisible(() => !isLanguageModalVisible);
    return (
        <View style={{ flexDirection: 'row' }}>
            <View
                style={{
                    backgroundColor: '#fff',
                    alignSelf: 'baseline',
                    padding: 12,
                    marginVertical: 10,
                    borderRadius: 8,
                    elevation: 3,
                    shadowColor: 'grey',
                    marginEnd: 10
                }}>
                <TouchableOpacity onPress={handleModal}>
                    <Text style={{ color: '#000001', fontFamily: 'SilkaBold', fontSize: 16 }}>
                        <Text
                            style={{
                                fontFamily: 'SilkaMedium',
                                color: 'grey',
                            }}>
                            Language:</Text> Any
                    </Text>
                    <LanguagesModal modalVisivble={isLanguageModalVisible} handleModalVisible={handleModal} />
                </TouchableOpacity>
            </View>
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
                {/* <TouchableOpacity onPress={handleModal}>
                    <Text style={{ color: '#000001', fontFamily: 'SilkaBold', fontSize: 16 }}>
                        <Text
                            style={{
                                fontFamily: 'SilkaMedium',
                                color: 'grey',
                            }}>
                            Date:</Text> 4 feb 22
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
                </TouchableOpacity> */}
            </View>
        </View>
    );
};
