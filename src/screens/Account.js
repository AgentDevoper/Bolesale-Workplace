import { StyleSheet, Text, View, Alert } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import MI from 'react-native-vector-icons/MaterialIcons'
import Icon from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import { TouchableOpacity } from 'react-native-gesture-handler'


const name = "William Smith";
const email = "@username";

const Account = ({ navigation }) => {
    return (
        <View style={{
            width: responsiveWidth(100),
            backgroundColor: "#F5F5F5",
        }}>
            <Text style={{
                fontSize: 20,
                marginLeft: 10,
                fontWeight: "700",
                marginTop: 20,
            }}>Profile</Text>

            <View style={{
                backgroundColor: "#0790AD",
                height: 100,
                marginHorizontal: 10,
                borderRadius: 10,
                elevation: 1,
                flexDirection: "row",
                marginTop: 10,
            }}>

                <FA5
                    name='user-circle'
                    size={65}
                    color={"#fff"}
                    style={{
                        height: 78,
                        width: 78,
                        marginLeft: 20,
                        marginVertical: 15,
                    }} />

                <View style={{
                    marginTop: 28,
                }}>
                    <Text style={{
                        color: "#FFFFFF",
                        fontWeight: "700",
                        fontSize: 15,
                    }}>{name}</Text>

                    <Text style={{
                        color: "#D7D7D7",
                        fontWeight: "400",
                        fontSize: 12
                    }}>{email}</Text>
                </View>

                <MI
                    name='verified'
                    color={"white"}
                    size={24}
                    style={{
                        height: 24,
                        width: 25,
                        marginLeft: responsiveWidth(28),
                        marginTop: 35,
                    }}
                />
            </View>

            <View style={{
                backgroundColor: "white",
                height: 310,
                marginHorizontal: 10,
                marginTop: 20,
                borderRadius: 10,
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Profile")}
                >
                    <View style={{
                        marginHorizontal: 10,
                        flexDirection: "row",
                    }}>
                        <FA5
                            name='user-circle'
                            size={43}
                            color={"#0601B4"}
                            style={{
                                height: 43,
                                width: 43,
                                marginHorizontal: 10,
                                marginVertical: 15,
                            }} />
                        <View style={{
                            marginTop: 18,
                            marginLeft: 10,
                        }}>
                            <Text style={{
                                color: "#181D27",
                                fontWeight: "500",
                                fontSize: 15,
                                marginBottom: 4,
                            }}>My Account </Text>

                            <Text style={{
                                color: "#ABABAB",
                                fontWeight: "400",
                                fontSize: 12
                            }}>Make changes to your account</Text>
                        </View>
                        <FA5
                            name='chevron-right'
                            size={14}
                            color={"#ABABAB"}
                            style={{
                                height: 14,
                                width: 9,
                                marginLeft: responsiveWidth(21),
                                marginTop: 30,
                            }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate("BankDetails")}
                >
                    <View style={{
                        // height: 100,
                        marginHorizontal: 10,
                        flexDirection: "row",
                        // marginTop: 8,
                    }}>
                        <FA5
                            name='user-circle'
                            size={43}
                            color={"#0601B4"}
                            style={{
                                height: 43,
                                width: 43,
                                marginHorizontal: 10,
                                marginVertical: 15,
                            }} />
                        <View style={{
                            marginTop: 18,
                            marginLeft: 10,
                        }}>
                            <Text style={{
                                color: "#181D27",
                                fontWeight: "500",
                                fontSize: 15,
                                marginBottom: 4,
                            }}>Bank Details</Text>

                            <Text style={{
                                color: "#ABABAB",
                                fontWeight: "400",
                                fontSize: 12
                            }}>Manage your saved account</Text>
                        </View>
                        <FA5
                            name='exclamation-triangle'
                            color={"#E41313"}
                            size={20}
                            style={{
                                height: 20,
                                width: 24,
                                marginLeft: responsiveWidth(16),
                                marginTop: 25,
                            }}
                        />
                        <FA5
                            name='chevron-right'
                            size={14}
                            color={"#ABABAB"}
                            style={{
                                height: 14,
                                width: 9,
                                marginLeft: 10,
                                marginTop: 30,
                            }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                // onPress={() => navigation.navigate("Profile")}
                >
                    <View style={{
                        // height: 100,
                        marginHorizontal: 10,
                        flexDirection: "row",
                        // marginTop: 8,
                    }}>
                        <MI
                            name='verified-user'
                            size={43}
                            color={"#0601B4"}
                            style={{
                                height: 43,
                                width: 43,
                                marginHorizontal: 10,
                                marginVertical: 15,
                            }} />
                        <View style={{
                            marginTop: 18,
                            marginLeft: 10,
                        }}>
                            <Text style={{
                                color: "#181D27",
                                fontWeight: "500",
                                fontSize: 15,
                                marginBottom: 4,
                            }}>Terms & Conditions</Text>

                            <Text style={{
                                color: "#ABABAB",
                                fontWeight: "400",
                                fontSize: 12
                            }}>Read of the t&c carefully</Text>
                        </View>
                        <FA5
                            name='chevron-right'
                            size={14}
                            color={"#ABABAB"}
                            style={{
                                height: 14,
                                width: 9,
                                marginLeft: responsiveWidth(29),
                                marginTop: 30,
                            }} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => Alert.alert("Logout")}
                >
                    <View style={{
                        // height: 100,
                        marginHorizontal: 10,
                        flexDirection: "row",
                        // marginTop: 8,
                    }}>
                        <Icon
                            name='log-out-outline'
                            size={43}
                            color={"#0601B4"}
                            style={{
                                height: 43,
                                width: 43,
                                marginHorizontal: 10,
                                marginVertical: 15,
                            }} />
                        <View style={{
                            marginTop: 18,
                            marginLeft: 10,
                        }}>
                            <Text style={{
                                color: "#181D27",
                                fontWeight: "500",
                                fontSize: 15,
                                marginBottom: 4,
                            }}>Log out</Text>

                            <Text style={{
                                color: "#ABABAB",
                                fontWeight: "400",
                                fontSize: 12
                            }}>Further secure your account for safety</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({})