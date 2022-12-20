import React from "react"
import { Text, TouchableOpacity, View } from "react-native"

export const ModalHead = ({ handleModalVisible }) => {
    return <View
        style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: '#000', fontSize: 20, fontFamily: 'SilkaMedium' }}> select Language</Text>
        <TouchableOpacity onPress={handleModalVisible}>
            <Text style={{ color: '#000' }}> close icon </Text>
        </TouchableOpacity>
    </View>
}