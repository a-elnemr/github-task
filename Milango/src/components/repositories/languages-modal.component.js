import React, { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import ReactNativeModal from "react-native-modal"
import { ModalBody } from "./modal-body.component"
import { ModalHead } from "./modal-head.component"

export const LanguagesModal = ({ modalVisivble, handleModalVisible }) => {
    return <>
        <ReactNativeModal isVisible={modalVisivble}>
            <View
                style={{
                    height: 600,
                    backgroundColor: 'white',
                    borderRadius: 15,
                    padding: 20,
                }}>
                <ModalHead handleModalVisible={handleModalVisible} />
                <ModalBody />
            </View>
        </ReactNativeModal>
    </>
}