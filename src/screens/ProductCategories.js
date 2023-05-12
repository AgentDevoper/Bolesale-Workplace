import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { StatusBar } from 'expo-status-bar'

const ProductCategories = ({ navigation }) => {
    return (
        <View>
            <StatusBar
                hidden={false}
            />
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <Text style={{
                    fontSize: 18,
                    marginHorizontal: responsiveWidth(4),
                    marginVertical: responsiveHeight(2),
                    fontWeight: "500",
                }}>Product Categories</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Categories")}
                >
                    <Text style={{
                        color: "#0790AD",
                        fontSize: 14,
                        marginHorizontal: responsiveWidth(2),
                        marginVertical: responsiveHeight(2),
                        fontWeight: "500",
                    }}>see more </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
            }}>
                <TouchableOpacity>
                    <View style={{
                        // elevation: 1,
                        // marginHorizontal: 20,
                        // marginVertical: 10,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        borderRadius: 8,
                        height: 136,
                    }}>
                        <Image
                            source={require("../../assets/Images/clothing.png")}
                            style={{
                                height: 78,
                                width: 64,
                                marginTop: 10,
                                marginLeft: 8,
                                marginRight: 8,
                                borderRadius: 8,
                            }}
                        />
                        <Text style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontWeight: "500"
                        }}>Clothing</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        // elevation: 1,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        borderRadius: 8,
                        height: 136,
                    }}>
                        <Image
                            source={require("../../assets/Images/Groceries.png")}
                            style={{
                                height: 78,
                                width: 64,
                                marginTop: 10,
                                marginLeft: 8,
                                marginRight: 8,
                                borderRadius: 8,
                            }}
                        />
                        <Text style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontWeight: "500"
                        }}>Groceries</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        // elevation: 1,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        borderRadius: 8,
                        height: 136,
                    }}>
                        <Image
                            source={require("../../assets/Images/Gadgets.png")}
                            style={{
                                height: 78,
                                width: 64,
                                marginTop: 10,
                                marginLeft: 8,
                                marginRight: 8,
                                borderRadius: 8,
                            }}
                        />
                        <Text style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontWeight: "500",
                        }}>Gadgets</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={{
                        // elevation: 1,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        borderRadius: 8,
                        height: 136,
                    }}>
                        <Image
                            source={require("../../assets/Images/Electronic.png")}
                            style={{
                                height: 78,
                                width: 64,
                                marginTop: 10,
                                marginLeft: 8,
                                marginRight: 8,
                                borderRadius: 8,
                            }}
                        />
                        <Text style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontWeight: "500",
                        }}>Electronic {'\n'} Appliance</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default ProductCategories

const styles = StyleSheet.create({
    Container2: {
        height: responsiveHeight(22),
        borderRadius: 10,
        // elevation: 1,
        borderWidth: 1,
        borderColor: "#CCCCC",
        borderRadius: 10,
    },

    Container3: {
        height: responsiveHeight(14),
        width: responsiveWidth(25),
        borderRadius: 10,
    },
})