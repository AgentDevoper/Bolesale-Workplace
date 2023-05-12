import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../components/Header'
import ProductCategories from './ProductCategories'
import Trendingnearyou from './Trendingnearyou'
import Footer from './Footer'


const Store = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <Text
                    style={{
                        textAlign: "center",
                        marginTop: 40,
                    }}>
                    Store
                </Text>
            </View>
        </ScrollView>
    )
}

export default Store

const styles = StyleSheet.create({})