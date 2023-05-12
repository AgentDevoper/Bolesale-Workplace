import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MCI from 'react-native-vector-icons/MaterialCommunityIcons'
import FA from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'

const Payment = ({ navigation }) => {
    const [cardClicked, setCardClicked] = useState(false);
    const [walletClicked, setWalletClicked] = useState(false);
    const [upiClicked, setUpiClicked] = useState(false);
    const [cashClicked, setCashClicked] = useState(false);
    return (
        <View style={{
            backgroundColor: "#FBFBFB",
            height: responsiveHeight(100),
        }}>
            <Text style={{
                fontSize: 16,
                color: "#121212",
                fontWeight: 700,
                marginTop: 25,
                marginLeft: 15,
            }}>Pick a Payment method</Text>
            <View style={{
                marginTop: 20,
            }}>

                <View style={{
                    height: 50,
                    elevation: 1,
                    borderRadius: 8,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    backgroundColor: "white",
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setCardClicked(!cardClicked);
                        }}
                    >
                        {cardClicked ? (
                            <FA
                                name='dot-circle-o'
                                color={"black"}
                                size={24}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                    // marginRight: 1,
                                }}
                            />
                        ) : (
                            <Entypo
                                name='circle'
                                color={"#CCCCCC"}
                                size={21}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                }}
                            />
                        )
                        }
                    </TouchableOpacity>
                    <View style={{
                        marginLeft: 25,
                        marginTop: 10,
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                setCardClicked(!cardClicked);
                            }}
                        >
                            {cardClicked ? (
                                <View>
                                    <Text style={{
                                        fontWeight: "600",
                                        fontSize: 10,
                                        fontWeight: "600",
                                        color: "black",
                                    }}>
                                        Debit/ Credit Card
                                    </Text>
                                    <Text style={{
                                        fontWeight: "300",
                                        fontSize: 12,
                                        width: 115,
                                        color: "#939393",
                                    }}>
                                        (***********7493)
                                    </Text>
                                </View>
                            ) : (
                                <View>
                                    <Text style={{
                                        fontWeight: "600",
                                        fontSize: 10,
                                        fontWeight: "600",
                                        color: "#939393",
                                    }}>
                                        Debit/ Credit Card
                                    </Text>
                                    <Text style={{
                                        fontWeight: "300",
                                        fontSize: 12,
                                        width: 115,
                                        color: "#939393",
                                    }}>
                                        (***********7493)
                                    </Text>
                                </View>
                            )
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        borderRadius: 5,
                        height: 28,
                        width: 38,
                        borderWidth: 1,
                        borderColor: "#939393",
                        marginLeft: 30,
                        marginTop: 10,
                    }}>
                        <Image
                            source={require("../../assets/Images/Card.png")}
                            style={{
                                height: 20,
                                width: 36,
                                marginTop: 2.5,
                                borderRadius: 5,
                            }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setCardClicked(!cardClicked);
                            }}>
                            {cardClicked ? (
                                <MCI
                                    name='pencil-circle-outline'
                                    color={"black"}
                                    size={23}
                                    style={{
                                        marginTop: 14,
                                        marginLeft: 30,
                                    }}
                                />
                            ) : (
                                <MCI
                                    name='pencil-circle-outline'
                                    color={"#CCCCCC"}
                                    size={23}
                                    style={{
                                        marginTop: 14,
                                        marginLeft: 30,
                                    }}
                                />
                            )
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    height: 50,
                    elevation: 1,
                    borderRadius: 8,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    backgroundColor: "white",
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setWalletClicked(!walletClicked);
                        }}
                    >
                        {walletClicked ? (
                            <FA
                                name='dot-circle-o'
                                color={"black"}
                                size={24}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                    // marginRight: 1,
                                }}
                            />
                        ) : (
                            <Entypo
                                name='circle'
                                color={"#CCCCCC"}
                                size={21}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                }}
                            />
                        )
                        }
                    </TouchableOpacity>
                    <View style={{
                        marginLeft: 25,
                        marginTop: 18,
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                setWalletClicked(!walletClicked);
                            }}
                        >
                            {walletClicked ? (
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    width: 115,
                                    color: "#121212",
                                }}>
                                    Digital Wallet
                                </Text>
                            ) : (
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    width: 115,
                                    color: "#939393"
                                }}>
                                    Digital Wallet
                                </Text>
                            )
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        borderRadius: 5,
                        height: 28,
                        width: 38,
                        borderWidth: 1,
                        borderColor: "#939393",
                        marginLeft: 30,
                        marginTop: 10,
                    }}>
                        <Image
                            source={require("../../assets/Images/Wallet.png")}
                            style={{
                                height: 20,
                                width: 36,
                                marginTop: 2.5,
                                borderRadius: 5,
                            }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setWalletClicked(!walletClicked);
                            }}
                        >
                            {walletClicked ? (
                                <MCI
                                    name='pencil-circle-outline'
                                    color={"black"}
                                    // color={"#CCCCCC"}
                                    size={23}
                                    style={{
                                        marginTop: 14,
                                        marginLeft: 30,
                                    }}
                                />
                            ) : (
                                <MCI
                                    name='pencil-circle-outline'
                                    // color={"black"}
                                    color={"#CCCCCC"}
                                    size={23}
                                    style={{
                                        marginTop: 14,
                                        marginLeft: 30,
                                    }}
                                />
                            )
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    height: 50,
                    elevation: 1,
                    borderRadius: 8,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    backgroundColor: "white",
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setUpiClicked(!upiClicked);
                        }}
                    >
                        {upiClicked ? (
                            <FA
                                name='dot-circle-o'
                                color={"black"}
                                size={24}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                    // marginRight: 1,
                                }}
                            />
                        ) : (
                            <Entypo
                                name='circle'
                                color={"#CCCCCC"}
                                size={21}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                }}
                            />
                        )
                        }
                    </TouchableOpacity>
                    <View style={{
                        marginLeft: 25,
                        marginTop: 18,
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                setUpiClicked(!upiClicked);
                            }}
                        >
                            {upiClicked ? (
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    width: 115,
                                    color: "#121212",
                                }}>
                                    UPI
                                </Text>
                            ) : (
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    width: 115,
                                    color: "#939393"
                                }}>
                                    UPI
                                </Text>
                            )
                            }
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    height: 50,
                    elevation: 1,
                    borderRadius: 8,
                    marginHorizontal: 20,
                    marginVertical: 10,
                    flexDirection: "row",
                    backgroundColor: "white",
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            setCashClicked(!cashClicked);
                        }}
                    >
                        {cashClicked ? (
                            <FA
                                name='dot-circle-o'
                                color={"black"}
                                size={24}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                    // marginRight: 1,
                                }}
                            />
                        ) : (
                            <Entypo
                                name='circle'
                                color={"#CCCCCC"}
                                size={21}
                                style={{
                                    marginTop: 14,
                                    marginLeft: 20,
                                }}
                            />
                        )
                        }
                    </TouchableOpacity>
                    <View style={{
                        marginLeft: 25,
                        marginTop: 18,
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                setCashClicked(!cashClicked);
                            }}
                        >
                            {cashClicked ? (
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    width: 115,
                                    color: "#121212",
                                }}>
                                    Cash
                                </Text>
                            ) : (
                                <Text style={{
                                    fontWeight: "600",
                                    fontSize: 10,
                                    fontWeight: "600",
                                    width: 115,
                                    color: "#939393"
                                }}>
                                    Cash
                                </Text>
                            )
                            }
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Order2")}
                    style={{
                        borderRadius: 8,
                        backgroundColor: "#000000",
                        height: 50,
                        width: responsiveWidth(90),
                        marginHorizontal: 20,
                        marginTop: 20,
                        justifyContent: "center",
                    }}
                >
                    <Text style={{
                        color: "white",
                        fontWeight: "300",
                        textAlign: "center",
                        fontSize: 15,
                    }}>Select</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment

const styles = StyleSheet.create({})