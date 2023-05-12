import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacityBase } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MCI from "react-native-vector-icons/MaterialCommunityIcons";

const Footer = () => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.Container1}>
                <TouchableOpacity>
                    <View style={{
                        marginHorizontal: 10,
                    }}>
                        <Image
                            source={require("../../assets/Images/Footer1.png")}
                            style={{
                                height: responsiveHeight(20),
                                borderRadius: 14,
                                width: 315,
                            }}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        marginLeft: 5,
                    }}>
                        <Image
                            source={require("../../assets/Images/Footer2.png")}
                            style={{
                                height: responsiveHeight(20),
                                borderRadius: 14,
                                width: 315,
                            }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default Footer

const styles = StyleSheet.create({
    Container1: {
        flexDirection: "row",
        marginTop: responsiveHeight(3),
        marginHorizontal: responsiveWidth(2),
        paddingRight: 10,
        borderRadius: 5,
        marginBottom: 10,
        borderRadius: 14,
        marginBottom: 90,
    },
})