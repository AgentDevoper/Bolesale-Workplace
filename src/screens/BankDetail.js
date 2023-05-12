import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'

const BankDetail = ({ navigation }) => {


    return (
        <ScrollView >
            <View style={{
                backgroundColor: "#F5F5F5",
                width: responsiveWidth(100),
                height: responsiveHeight(100),
            }}>
                <View style={{
                    flexDirection: "row",
                    marginTop: 28,
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Icon
                            name='arrow-back'
                            size={24}
                            color={"black"}
                            style={{
                                height: 21,
                                width: 20,
                                marginLeft: 10,
                            }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 16,
                        marginHorizontal: responsiveWidth(30),
                        fontWeight: "500",
                    }}>
                        Bank Details
                    </Text>
                </View>


                <View>
                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "500",
                            marginLeft: 15,
                            marginTop: 24,
                            marginBottom: 10,
                        }}>Bank Holder</Text>
                        <TextInput
                            style={{
                                elevation: 1,
                                backgroundColor: "#fff",
                                height: 60,
                                width: responsiveWidth(95),
                                marginLeft: 10,
                                marginRight: 10,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                paddingLeft: 20,
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='Choose your bank account'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "500",
                            marginLeft: 15,
                            marginTop: 24,
                            marginBottom: 10,
                        }}>Account Number</Text>
                        <TextInput
                            style={{
                                elevation: 1,
                                backgroundColor: "#fff",
                                height: 60,
                                width: responsiveWidth(95),
                                marginLeft: 10,
                                marginRight: 10,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                paddingLeft: 20,
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='****************'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "500",
                            marginLeft: 15,
                            marginTop: 24,
                            marginBottom: 10,
                        }}>PAN Card</Text>
                        <TextInput
                            style={{
                                elevation: 1,
                                backgroundColor: "#fff",
                                height: 60,
                                width: responsiveWidth(95),
                                marginLeft: 10,
                                marginRight: 10,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                paddingLeft: 20,
                            }}
                            autoCapitalize="none"
                            autoCorrect={false}
                            placeholder='12345678HDD'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: "500",
                            marginLeft: 15,
                            marginTop: 24,
                            marginBottom: 10,
                        }}>Aadhar Card</Text>
                        <TextInput
                            style={{
                                elevation: 1,
                                backgroundColor: "#fff",
                                height: 60,
                                width: responsiveWidth(95),
                                marginLeft: 10,
                                marginRight: 10,
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                paddingLeft: 20,
                            }}
                            autoCapitalize="none"
                            // keyboardType="numeric"
                            // mode="flat"
                            keyboardType="phone-pad"
                            maxLength={12}
                            autoCorrect={false}
                            placeholder='123 456 678 890 98'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
                            marginTop: 32,
                            backgroundColor: "#0790AD",
                            height: 46,
                            width: responsiveWidth(90),
                            marginHorizontal: 18,
                        }}
                    // onPress={() => }
                    >
                        <Text style={{
                            color: "white",
                            paddingVertical: responsiveHeight(1.8),
                            fontSize: responsiveFontSize(2),
                            textAlign: "center",
                        }}>Update Profile</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
    )
}

export default BankDetail

const styles = StyleSheet.create({})