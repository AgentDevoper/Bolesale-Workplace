import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'


function HandM() {
    return (
        <TouchableOpacity>
            <View style={{
                // elevation: 1,
                borderRadius: 8,
                height: 185,
                backgroundColor: "#fff",
            }}>
                <Image
                    source={require("../../assets/Images/handm.png")}
                    style={{
                        height: 141,
                        width: 90,
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
                }}>H&M blue Tshirt</Text>
            </View>
        </TouchableOpacity>
    )
}

function BucketCap() {
    return (
        <TouchableOpacity>
            <View style={{
                // elevation: 1,
                borderRadius: 8,
                height: 185,
                backgroundColor: "#fff",
            }}>
                <Image
                    source={require("../../assets/Images/BucketCap.png")}
                    style={{
                        height: 141,
                        width: 90,
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
                    // backgroundColor: "#fff"
                }}>Bucket Cap</Text>
            </View>
        </TouchableOpacity>
    )
}



const Trendingnearyou = () => {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginRight: 20,
            }}>
                <Text style={{
                    fontSize: 18,
                    marginHorizontal: responsiveWidth(4),
                    marginVertical: responsiveHeight(2),
                    fontWeight: "500",
                }}>Trending near you</Text>

                <View
                    style={{
                        flexDirection: "row",
                        marginRight: 10,
                        marginVertical: responsiveHeight(2),
                        marginLeft: 10,
                    }}>
                    <TouchableOpacity>
                        <FA5
                            name='sliders-h'
                            size={20}
                            color={"black"}
                            style={{
                                height: 19,
                                width: 20,
                                marginRight: 15,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <MCI
                            name='filter'
                            size={20}
                            color={"black"}
                            style={{
                                height: 19,
                                width: 20,
                                // marginRight: 2,
                                // padding: 1,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
            }}>
                <HandM />
                <BucketCap />
                <HandM />
            </View>

            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginHorizontal: 10,
                marginTop: 10,
            }}>
                <BucketCap />
                <HandM />
                <BucketCap />
            </View>
        </View>
    )
}

export default Trendingnearyou

const styles = StyleSheet.create({})