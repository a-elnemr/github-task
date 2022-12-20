import React from "react"
import { Text, View } from "react-native"
import { Star } from "../../assets/icons/iconsComponent"

export const TrendingRepositoryHead = ({ repo }) => {
    return <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ color: '#9ca2a7', fontFamily: 'SilkaMedium', fontSize: 14 }}>Trending repository</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Star />
                <Text style={{ fontFamily: 'SilkaBold', fontSize: 16, color: '#3a3a3a' }}>star </Text>
                <View style={{ backgroundColor: '#e7e3f1', padding: 5, borderRadius: 8, marginHorizontal: 10 }}>
                    <Text style={{ color: '#2d1390', fontFamily: 'SilkaBold' }}>{repo.stargazers_count}  </Text>
                </View>
            </View>

        </View>
    </View>
}