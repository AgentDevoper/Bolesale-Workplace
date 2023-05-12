import { StyleSheet, View, Image, Text } from 'react-native'
import React from 'react'
import { Badge } from 'react-native-paper'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Header from '../components/Header'
import ProductCategories from './ProductCategories'
import Trendingnearyou from './Trendingnearyou'
import Footer from './Footer'


const Home = ({ navigation }) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View>
                <Header navigation={navigation} />
                <ProductCategories navigation={navigation} />
                <Trendingnearyou navigation={navigation} />
                <Footer />
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({})