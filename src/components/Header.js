import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import MI from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TextInput } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'

// const IconSize = 24;
const Header = ({ navigation }) => {
    const [search, setSearch] = useState('')
    return (
        <View style={{
            backgroundColor: "#0790AD",
            height: 180,
            width: responsiveWidth(100),
            paddingTop: responsiveHeight(2),
        }}>
            <StatusBar
                hidden={false}
            />
            <View style={styles.mainContainer}>
                <View style={styles.view}>
                    {<TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Feather
                            name='menu'
                            size={20}
                            color={"white"}
                            style={{
                                fontSize: 25,
                                marginLeft: 10,
                            }} />
                    </TouchableOpacity>}
                    <Text style={{
                        color: "#fff",
                        fontSize: responsiveFontSize(3.3),
                        // marginHorizontal: responsiveWidth(20)
                        // marginHorizontal: 85,
                        marginLeft: 84,
                        // marginRight: 80,
                    }}>
                        BoleSale
                    </Text>
                </View>

                <View style={{
                    marginHorizontal: 2,
                }}>
                    <View style={[styles.view, styles.righView]}>

                        <TouchableOpacity >
                            <MI
                                name='layers'
                                size={20}
                                color={"white"}
                                style={{
                                    height: 18,
                                    width: 20,
                                }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowView}
                        // onPress={() => navigation.navigate("Bulletin")}
                        >
                            <Icon
                                name='heart'
                                size={20}
                                color={"white"}
                                style={{
                                    height: 18,
                                    width: 20,
                                    // marginVertical: responsiveHeight(0.1),
                                    // marginHorizontal: responsiveWidth(0.1),
                                    marginLeft: 10,
                                }} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.rowView}
                            onPress={() => navigation.navigate("Order")}
                        >
                            <Icon
                                name='md-cart-sharp'
                                size={20}
                                color={"white"}
                                style={{
                                    height: 18,
                                    width: 20,
                                }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{
                borderRadius: 20,
                height: 42,
                overflow: 'hidden',
                marginHorizontal: 20,
                marginTop: 25,
            }}>
                <TextInput
                    style={{
                        borderRadius: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        height: 44,
                        overflow: 'hidden',
                        backgroundColor: '#fff',
                    }}
                    mode='flat'
                    placeholder="  🔎 Search anything..."
                    placeholderTextColor={"#A3A3A3"}
                />
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    view: {
        flex: 1,
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    titleView: {
        textAlign: "center",
        justifyContent: "center",
    },
    righView: {
        justifyContent: "flex-end",
    },
    rowView: {
        flexDirection: "row",
        alignContent: "center",
        marginRight: 10,
    },

    mainContainer: {
        height: responsiveHeight(10),
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row",
        marginTop: responsiveHeight(1),
    },

    badge: {
        position: "absolute",
        top: 0,
        right: 0,
        color: "white",
        marginRight: 4,
    },

    btn: {
        borderRadius: 11,
        borderWidth: 1,
    },

    img: {
        height: 35,
        width: 35,
        borderRadius: 11,
    },

    input: {
        height: 44,
        marginHorizontal: 25,
        marginTop: 16,
        borderTopStartRadius: 20,
        borderRadius: 20,
        borderTopEndRadius: 20,
        color: "#A3A3A3",
        backgroundColor: "white",
        // marginBottom: 40,
        // fontSize: 14,
        // padding: 10,
    },


})