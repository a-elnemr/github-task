import React from "react"
import { Image, Text, View } from "react-native"

export const HomeHeader = () => {
    return (
        <View style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: '#fff',
            paddingTop: 30,
            paddingHorizontal: 15,
            // shadowColor: "lightgrey",
            // shadowOffset: {
            //     width: 0,
            //     height: 12,
            // },
            // shadowOpacity: 0.58,
            // shadowRadius: 16.00,
            // elevation: 24,

        }}>
            <Image
                source={require('../../assets/imgs/logo.png')}
                style={{ height: 25, width: 125 }}
            />

            <Text>search</Text>
        </View>
    )

}