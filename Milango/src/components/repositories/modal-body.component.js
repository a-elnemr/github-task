import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const ModalBody = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: 'lightgrey',
                marginTop: 20,
                marginHorizontal: 5,
                paddingHorizontal: 15,
                borderRadius: 10,
            }}>
                <TextInput placeholder="Filter Languages" style={{
                    flex: 1,
                    fontSize: 16,
                    fontFamily: 'SilkaMedium',
                    paddingHorizontal: 5,
                    color: '#aeb3b7'
                }}
                    placeholderTextColor="#aeb3b7"
                />
                <Text>search</Text>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
        </>
    );
};
