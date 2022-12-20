import React from "react"
import { View } from "react-native"
import { RepositoriesHoc } from "../../hoc"

export const Repositories = () => {
    return <View style={{ padding: 20, backgroundColor: '#fbfcfe', flex: 1 }}>
        <RepositoriesHoc />
    </View>
}