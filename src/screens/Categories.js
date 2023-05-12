import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Checkbox from 'expo-checkbox';
import Entypo from "react-native-vector-icons/Entypo";

const Categories = ({ navigation }) => {
    const [Clothing, setClothing] = useState(false)
    const [Mobile, setMobile] = useState(false)
    const [Footwear, setFootwear] = useState(false)
    const [Stationary, setStationary] = useState(false)
    const [Kitchenware, setKitchenware] = useState(false)
    const [Sports, setSports] = useState(false)
    const [HomeDecor, setHomeDecor] = useState(false)
    const [Fashion, setFashion] = useState(false)
    return (
        <View>
            <StatusBar
                hidden={true}
            />
            <View
                style={{
                    backgroundColor: "#0790AD",
                    height: responsiveHeight(8),
                    width: responsiveWidth(100),
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>

                <Text style={{
                    color: "white",
                    fontSize: 22,
                    marginTop: 11,
                    marginLeft: 10,
                    fontWeight: "500",
                }}>
                    Categories Selection
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Entypo
                        name='cross'
                        size={28}
                        color={"white"}
                        style={{
                            color: "white",
                            marginTop: 11,
                            marginRight: 15,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>

                    <Icon
                        name='ios-shirt-sharp'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Clothing & Apparels
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 72,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Clothing}
                        onValueChange={setClothing}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <Feather
                        name='watch'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Mobile & Accessories
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 59,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Mobile}
                        onValueChange={setMobile}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <MCI
                        name='shoe-sneaker'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Footwear
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 146,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Footwear}
                        onValueChange={setFootwear}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <MCI
                        name='bookshelf'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Stationary & Office{'\n'}Supplies
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 75,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Stationary}
                        onValueChange={setStationary}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <MCI
                        name='silverware-fork-knife'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Kitchenware
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 123,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Kitchenware}
                        onValueChange={setKitchenware}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <Icon
                        name='game-controller'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Sports, Goods & Toys
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 60,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Sports}
                        onValueChange={setSports}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <MCI
                        name='sofa-single'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Home Decor
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 123,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={HomeDecor}
                        onValueChange={setHomeDecor}
                        color="#0790AD"
                    />
                </View>

                <View style={{
                    flexDirection: "row",
                    marginLeft: 25,
                    marginVertical: 20,
                }}>
                    <FA5
                        name='shopping-bag'
                        size={30}
                        color={"black"}
                        style={{
                            // height: 21,
                            // width: 27,
                            // marginLeft: 20,
                            // marginVertical: 20,
                        }} />
                    <Text
                        style={{
                            fontWeight: "400",
                            fontSize: 16,
                            marginHorizontal: 20,
                        }}
                    >
                        Luggage, Fabric &{'\n'}Fashion Accessories
                    </Text>
                    <Checkbox
                        style={{
                            marginLeft: 66,
                            marginTop: 5,
                            height: responsiveHeight(3),
                            width: responsiveWidth(6),
                            borderColor: "#D9D9D9",
                        }}
                        value={Fashion}
                        onValueChange={setFashion}
                        color="#0790AD"
                    />
                </View>
            </View>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({})