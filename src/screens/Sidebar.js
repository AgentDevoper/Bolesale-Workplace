import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import FA from 'react-native-vector-icons/FontAwesome'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveHeight } from 'react-native-responsive-dimensions'
// import { useFonts } from 'expo-font';
// import {
//     Poppins_400Regular,
//     Poppins_400Regular_Italic,
//     Poppins_500Medium,
//     Poppins_500Medium_Italic,
//     Poppins_600SemiBold,
//     Poppins_600SemiBold_Italic,
//     Poppins_700Bold,
//     Poppins_700Bold_Italic,
// } from '@expo-google-fonts/poppins';
// import {
//     DMSans_400Regular,
// } from '@expo-google-fonts/dm-sans';
// import AppLoading from 'expo-app-loading'

const Sidebar = ({ navigation }) => {
    const [profile, setProfile] = useState(false)
    const [order, setOrder] = useState(false)
    const [location, setLocation] = useState(false)
    const [settings, setSettings] = useState(false)
    const [about, setAbout] = useState(false)
    const [contact, setContact] = useState(false)

    // let [fontsLoad] = useFonts({
    //     Poppins_400Regular,
    //     Poppins_400Regular_Italic,
    //     Poppins_500Medium,
    //     Poppins_500Medium_Italic,
    //     Poppins_600SemiBold,
    //     Poppins_6r00SemiBold_Italic,
    //     Poppins_700Bold,
    //     Poppins_700Bold_Italic,
    //     DMSans_400Regular,
    // })
    // if (!fontsLoad) {
    //     return <AppLoading />;
    // }
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                //  backgroundColor: "#F5F5F5",
                height: responsiveHeight(105),
            }}>
                <View style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginLeft: 20,
                }}>
                    <Image
                        source={require("../../assets/Images/User.jpg")}
                        // source={require("../../assets/Images/Electronic.png")}
                        style={{
                            height: 72,
                            width: 72,
                            borderRadius: 40,
                        }}
                    />
                    <Text style={{
                        // fontWeight: "700",
                        fontSize: 18,
                        marginTop: 20,
                        marginLeft: 18,
                        // fontFamily: "DMSans_400Regular",
                    }}>William Smith</Text>
                </View>

                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 20,
                    marginRight: 60,
                    marginTop: 15,
                    marginBottom: 10,
                }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
                    <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
                </View>

                <View>
                    <TouchableOpacity
                        onPress={() => {
                            setProfile(!profile);
                            // navigation.navigate("Order")
                        }}
                    >
                        {profile ? (
                            <View style={{
                                backgroundColor: "#0790AD26",
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                // elevation: 1,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <FA
                                        name='user-circle-o'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        fontSize: 16,
                                        // fontFamily: "DMSans_400Regular",
                                    }}>
                                        My Profile
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View style={{
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <FA
                                        name='user-circle-o'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        // fontFamily: "DMSans_400Regular",
                                        fontSize: 16,
                                    }}>
                                        My Profile
                                    </Text>
                                </View>
                            </View>
                        )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setOrder(!order);
                        }}
                    >
                        {order ? (
                            <View style={{
                                backgroundColor: "#0790AD26",
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                // elevation: 1,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <Foundation
                                        name='clipboard-notes'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 24,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        Orders
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View style={{
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <Foundation
                                        name='clipboard-notes'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 24,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        Orders
                                    </Text>
                                </View>
                            </View>
                        )
                        }
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => {
                            setLocation(!location);
                        }}
                    >
                        {location ? (
                            <View style={{
                                backgroundColor: "#0790AD26",
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                // elevation: 1,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <Ionicons
                                        name='ios-location-sharp'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>

                                        Location
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View style={{
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <Ionicons
                                        name='ios-location-sharp'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>

                                        Location
                                    </Text>
                                </View>
                            </View>
                        )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setSettings(!settings);
                        }}
                    >
                        {settings ? (
                            <View style={{
                                backgroundColor: "#0790AD26",
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                // elevation: 1,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <Ionicons
                                        name='ios-settings-sharp'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        Settings
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View style={{
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <Ionicons
                                        name='ios-settings-sharp'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        Settings
                                    </Text>
                                </View>
                            </View>
                        )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setAbout(!about);
                        }}
                    >
                        {about ? (
                            <View style={{
                                backgroundColor: "#0790AD26",
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                // elevation: 1,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <AntDesign
                                        name='infocirlce'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        About
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View style={{
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <AntDesign
                                        name='infocirlce'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        About
                                    </Text>
                                </View>
                            </View>
                        )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setContact(!contact);
                        }}
                    >
                        {contact ? (
                            <View style={{
                                backgroundColor: "#0790AD26",
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                // elevation: 1,
                                borderWidth: 1,
                                borderColor: "#CCCCCC",
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <FA5
                                        name='phone-alt'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        Contact us
                                    </Text>
                                </View>
                            </View>
                        ) : (
                            <View style={{
                                height: 48,
                                borderRadius: 8,
                                marginHorizontal: 20,
                                marginVertical: 5,
                            }}>
                                <View style={{
                                    flexDirection: "row",
                                }}>
                                    <FA5
                                        name='phone-alt'
                                        color={"black"}
                                        size={24}
                                        style={{
                                            marginTop: 13,
                                            marginLeft: 20,
                                        }}
                                    />
                                    <Text style={{
                                        marginLeft: 20,
                                        marginTop: 13,
                                        // fontWeight: "400",
                                        // fontFamily: "Poppins_400Regular",
                                        fontSize: 16,
                                    }}>
                                        Contact us
                                    </Text>
                                </View>
                            </View>
                        )
                        }
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Alert.alert("Logout")}
                    >
                        <View style={{
                            height: 48,
                            borderRadius: 8,
                            marginHorizontal: 10,
                            // marginVertical: 5,
                            marginTop: 30,
                        }}>
                            <View style={{
                                flexDirection: "row",
                            }}>
                                <MCI
                                    name='logout'
                                    color={"black"}
                                    size={26}
                                    style={{
                                        marginTop: 13,
                                        marginLeft: 20,
                                    }}
                                />
                                <Text style={{
                                    marginLeft: 10,
                                    marginTop: 13,
                                    // fontFamily: "Poppins_400Regular",
                                    fontSize: 16,
                                }}>
                                    Logout
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        marginLeft: 30,
                        marginTop: 50,
                    }}>
                        <Text style={{
                            color: "#A9A9A9",
                            fontWeight: "400",
                            fontSize: 16,
                            // fontFamily: "Poppins_400Regular",
                        }}>
                            support 1.23833{'\n'}copyright@
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Sidebar

const styles = StyleSheet.create({})