import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const Price = 100;
const Tax = 10;
function HandM() {
    return (
        <TouchableOpacity>
            <View style={{
                // elevation: 1,
                // borderRadius: 8,
                // height: 118,
                marginTop: 20,
                backgroundColor: "#fff",
                borderRadius: 8,
            }}>
                <Image
                    source={require("../../assets/Images/handm.png")}
                    style={{
                        height: 100,
                        width: 64,
                        marginTop: 8,
                        marginLeft: 8,
                        marginRight: 8,
                        borderRadius: 8,
                    }}
                />
                <Text style={{
                    textAlign: "center",
                    marginTop: 10,
                    marginBottom: 2,
                    fontSize: 7,
                    fontWeight: "500"
                }}>H&M blue Tshirt</Text>
            </View>
        </TouchableOpacity>
    )
}


const Order = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                // height: ,
                width: responsiveWidth(100),
                marginBottom: 40,
            }}>
                <View style={{
                    backgroundColor: "#0790AD",
                    height: 120,
                    flexDirection: "row",
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <FA5
                            name='long-arrow-alt-left'
                            size={26}
                            color={"#fff"}
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: responsiveWidth(6.5),
                                marginTop: 75,
                            }}
                        />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 24,
                        color: "#fff",
                        textAlign: "center",
                        marginTop: 75,
                        marginLeft: responsiveWidth(30),
                        fontWeight: "500"
                    }}>Cart</Text>
                </View>

                <View>
                    <View style={{
                        height: 110,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        width: responsiveWidth(88),
                        borderRadius: 5,
                        marginTop: 10,
                        marginHorizontal: 22,
                    }}>
                        <TouchableOpacity>
                            <AntDesign
                                name='delete'
                                size={12}
                                color={"#F60000"}
                                style={{
                                    height: 12,
                                    width: 12,
                                    marginLeft: responsiveWidth(80),
                                    marginTop: 8,
                                }}
                            />
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image
                                source={require("../../assets/Images/BucketCap.png")}
                                style={{
                                    height: 74,
                                    width: 58,
                                    marginLeft: 10,
                                }}
                            />
                            <View style={{
                                marginLeft: 14,
                            }}>
                                <Text>
                                    H&M Olive Bucket{'\n'}Cap
                                </Text>

                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        color: "#939393",
                                        marginRight: 4,
                                    }}>
                                        Size:
                                    </Text>
                                    <Text>
                                        M
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                marginLeft: 14,
                                marginTop: 40,
                            }}>
                                <Text>₹ 799</Text>
                            </View>
                            <View style={{
                                backgroundColor: "#0790AD",
                                height: 20,
                                width: 43,
                                marginTop: 40,
                                marginLeft: responsiveWidth(6),
                                borderRadius: 5,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <TouchableOpacity>
                                    <Feather
                                        name='minus'
                                        color={"white"}
                                        size={10}
                                        style={{
                                            marginLeft: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{
                                    marginLeft: 2,
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: 14,
                                }}>
                                    1
                                </Text>
                                <TouchableOpacity>
                                    <Feather
                                        name='plus'
                                        color={"white"}
                                        size={11}
                                        style={{
                                            marginRight: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: 110,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        width: responsiveWidth(88),
                        borderRadius: 5,
                        marginTop: 10,
                        marginHorizontal: 22,
                    }}>
                        <TouchableOpacity>
                            <AntDesign
                                name='delete'
                                size={12}
                                color={"#F60000"}
                                style={{
                                    height: 12,
                                    width: 12,
                                    marginLeft: responsiveWidth(80),
                                    marginTop: 8,

                                }}
                            />
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image
                                source={require("../../assets/Images/BucketCap.png")}
                                style={{
                                    height: 74,
                                    width: 58,
                                    marginLeft: 10,
                                }}
                            />
                            <View style={{
                                marginLeft: 14,
                            }}>
                                <Text>
                                    H&M Olive Bucket{'\n'}Cap
                                </Text>

                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        color: "#939393",
                                        marginRight: 4,
                                    }}>
                                        Size:
                                    </Text>
                                    <Text>
                                        M
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                marginLeft: 14,
                                marginTop: 40,
                            }}>
                                <Text>₹ 799</Text>
                            </View>
                            <View style={{
                                backgroundColor: "#0790AD",
                                height: 20,
                                width: 43,
                                marginTop: 40,
                                marginLeft: responsiveWidth(6),
                                borderRadius: 5,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <TouchableOpacity>
                                    <Feather
                                        name='minus'
                                        color={"white"}
                                        size={10}
                                        style={{
                                            marginLeft: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{
                                    marginLeft: 2,
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: 14,
                                }}>
                                    1
                                </Text>
                                <TouchableOpacity>
                                    <Feather
                                        name='plus'
                                        color={"white"}
                                        size={11}
                                        style={{
                                            marginRight: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: 110,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        width: responsiveWidth(88),
                        borderRadius: 5,
                        marginTop: 10,
                        marginHorizontal: 22,
                    }}>
                        <TouchableOpacity>
                            <AntDesign
                                name='delete'
                                size={12}
                                color={"#F60000"}
                                style={{
                                    height: 12,
                                    width: 12,
                                    marginLeft: responsiveWidth(80),
                                    marginTop: 8,

                                }}
                            />
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image
                                source={require("../../assets/Images/BucketCap.png")}
                                style={{
                                    height: 74,
                                    width: 58,
                                    marginLeft: 10,
                                }}
                            />
                            <View style={{
                                marginLeft: 14,
                            }}>
                                <Text>
                                    H&M Olive Bucket{'\n'}Cap
                                </Text>

                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        color: "#939393",
                                        marginRight: 4,
                                    }}>
                                        Size:
                                    </Text>
                                    <Text>
                                        M
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                marginLeft: 14,
                                marginTop: 40,
                            }}>
                                <Text>₹ 799</Text>
                            </View>
                            <View style={{
                                backgroundColor: "#0790AD",
                                height: 20,
                                width: 43,
                                marginTop: 40,
                                marginLeft: responsiveWidth(6),
                                borderRadius: 5,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <TouchableOpacity>
                                    <Feather
                                        name='minus'
                                        color={"white"}
                                        size={10}
                                        style={{
                                            marginLeft: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{
                                    marginLeft: 2,
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: 14,
                                }}>
                                    1
                                </Text>
                                <TouchableOpacity>
                                    <Feather
                                        name='plus'
                                        color={"white"}
                                        size={11}
                                        style={{
                                            marginRight: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        height: 110,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        width: responsiveWidth(88),
                        borderRadius: 5,
                        marginTop: 10,
                        marginHorizontal: 22,
                    }}>
                        <TouchableOpacity>
                            <AntDesign
                                name='delete'
                                size={12}
                                color={"#F60000"}
                                style={{
                                    height: 12,
                                    width: 12,
                                    marginLeft: responsiveWidth(80),
                                    marginTop: 8,

                                }}
                            />
                        </TouchableOpacity>

                        <View style={{
                            flexDirection: "row",
                        }}>
                            <Image
                                source={require("../../assets/Images/BucketCap.png")}
                                style={{
                                    height: 74,
                                    width: 58,
                                    marginLeft: 10,
                                }}
                            />
                            <View style={{
                                marginLeft: 14,
                            }}>
                                <Text>
                                    H&M Olive Bucket{'\n'}Cap
                                </Text>

                                <View style={{
                                    flexDirection: "row",
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        color: "#939393",
                                        marginRight: 4,
                                    }}>
                                        Size:
                                    </Text>
                                    <Text>
                                        M
                                    </Text>
                                </View>
                            </View>
                            <View style={{
                                marginLeft: 14,
                                marginTop: 40,
                            }}>
                                <Text>₹ 799</Text>
                            </View>
                            <View style={{
                                backgroundColor: "#0790AD",
                                height: 20,
                                width: 43,
                                marginTop: 40,
                                marginLeft: responsiveWidth(6),
                                borderRadius: 5,
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <TouchableOpacity>
                                    <Feather
                                        name='minus'
                                        color={"white"}
                                        size={10}
                                        style={{
                                            marginLeft: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                                <Text style={{
                                    marginLeft: 2,
                                    color: "white",
                                    fontWeight: "400",
                                    fontSize: 14,
                                }}>
                                    1
                                </Text>
                                <TouchableOpacity>
                                    <Feather
                                        name='plus'
                                        color={"white"}
                                        size={11}
                                        style={{
                                            marginRight: 5,
                                            marginTop: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <TouchableOpacity>
                    <View style={{
                        flexDirection: "row",
                        height: 44,
                        // elevation: 1,
                        borderWidth: 1,
                        borderColor: "#CCCCCC",
                        width: responsiveWidth(95),
                        borderRadius: 5,
                        marginTop: 20,
                        marginHorizontal: 10,
                        marginBottom: 2,
                    }}>
                        <MCI
                            name='android-messages'
                            size={26}
                            color={"#0790AD"}
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: responsiveWidth(4),
                                marginVertical: 7,
                            }}
                        />
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 14,
                            marginVertical: 10,
                            marginLeft: 15,
                        }}>
                            Add Promo
                        </Text>
                        <AntDesign
                            name='arrowright'
                            size={26}
                            color={"black"}
                            style={{
                                height: 24,
                                width: 24,
                                marginLeft: responsiveWidth(48),
                                marginVertical: 7,
                            }}
                        />
                    </View>
                </TouchableOpacity>

                <Text style={{
                    fontSize: 16,
                    fontWeight: "500",
                    marginLeft: responsiveWidth(6),
                    marginTop: 18,
                }}>
                    You Might Have Missed
                </Text>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginHorizontal: 10,
                }}>
                    <HandM />
                    <HandM />
                    <HandM />
                    <HandM />
                </View>

                <View style={{

                }}>
                    <Text style={{
                        fontWeight: "700",
                        fontSize: 15,
                        marginTop: 20,
                        marginLeft: 10,
                    }}>Payment Summary</Text>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 12,
                        marginVertical: 12,
                    }}>
                        <Text style={{
                            fontWeight: "400",
                            fontSize: 13,
                        }}>Price</Text>
                        <Text>₹{Price}</Text>
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 12,
                        marginVertical: 12,
                    }}>
                        <Text style={{
                            fontWeight: "400",
                            fontSize: 13,
                        }}>Tax</Text>
                        <Text>₹{Tax}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 12,
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
                        <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC' }} />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginHorizontal: 12,
                        marginVertical: 12,
                    }}>
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 13,
                        }}>Subtotal</Text>
                        <Text>₹{Price + Tax}</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            backgroundColor: "#0790AD",
                            height: 46,
                            width: responsiveWidth(90),
                            marginHorizontal: 18,
                            marginTop: 50,
                        }}
                        onPress={() => navigation.navigate("Payment")}
                    >
                        <Text style={{
                            color: "white",
                            paddingVertical: responsiveHeight(1.8),
                            fontSize: responsiveFontSize(2),
                            textAlign: "center",
                        }}>Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default Order

const styles = StyleSheet.create({})