import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import FA5 from 'react-native-vector-icons/FontAwesome5'
import FA from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import SelectDropdown from 'react-native-select-dropdown'
import { Calendar } from 'react-native-calendars'

const Gender = ["Female", "Male", "Does not want to tell", "Ireland"]
const name = "William Smith";
const email = "williamsmith@gmail.com";


const Profile = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
    const [date, setDate] = useState("What is your date of birth?");
    return (
        <ScrollView>

            <View style={{
                backgroundColor: "#F5F5F5",
                width: responsiveWidth(100),
                height: responsiveHeight(120),
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
                        marginHorizontal: responsiveWidth(35),
                        fontWeight: "500",
                    }}>
                        Profile
                    </Text>
                </View>

                <View>
                    <FA5
                        name='user-circle'
                        size={65}
                        color={"#0601B4"}
                        style={{
                            height: 78,
                            width: 78,
                            marginLeft: responsiveWidth(42),
                            marginTop: 40,
                        }} />

                    <Text style={{
                        color: "#181D27",
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: 16,
                    }}>{name}</Text>

                    <Text style={{
                        color: "#ABABAB",
                        textAlign: "center",
                        fontWeight: "400",
                        fontSize: 13,
                    }}>{email}</Text>
                </View>

                <View style={{
                    marginVertical: 28,
                }}>
                    <View style={{
                        marginVertical: 10,
                    }}>
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
                            placeholder='What’s your first name?'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View style={{
                        marginVertical: 10,
                    }}>
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
                            placeholder='And your last name?'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View style={{
                        marginVertical: 10,
                    }}>
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
                            placeholder='+91   |  Phone Number'
                            placeholderTextColor="#555555"
                            keyboardType='numeric'
                        // onChangeText={(actualData) => setUserName(actualData)}
                        />
                    </View>

                    <View style={{
                        marginVertical: 10,
                    }}>
                        <TouchableOpacity
                            onPress={() => GenderPicker()}
                        >
                            {/* <Text>
                                {actualData}
                            </Text> */}
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
                                placeholder='Select your gender'
                                placeholderTextColor="#555555"
                            // onChangeText={(actualData) => setDate(actualData)}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        marginVertical: 10,
                    }}>
                        <TouchableOpacity
                            onPress={() => setShowModal(true)}
                            style={{
                                backgroundColor: "#fff",
                                borderTopLeftRadius: 8,
                                borderTopRightRadius: 8,
                                height: 60,
                                width: responsiveWidth(95),
                                paddingLeft: 20,
                                marginLeft: 10,
                                marginRight: 10,
                                elevation: 1,
                                flexDirection: "row",
                                justifyContent: "space-between"
                            }}
                        >
                            <Text style={{
                                paddingVertical: 20,
                                color: "#555555",
                            }}>
                                What is your date of birth?
                            </Text>
                            <FA
                                // name='angle-down'
                                name='calendar'
                                color={"#B5B5BE"}
                                size={18}
                                style={{
                                    paddingVertical: 20,
                                    marginRight: 20,
                                }}
                            />
                        </TouchableOpacity>
                        <Modal visible={showModal} animationType="fade">
                            <Calendar style={{
                                borderRadius: 10,
                                elevation: 4,
                                margin: 40,
                            }}
                                onDayPress={date => {
                                    console.log(date)
                                    setShowModal(false)
                                }}
                                onMonthChange={() => { }}
                            // minDate={ }
                            // maxDate={ }
                            />
                        </Modal>
                        {/* <TextInput
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
                            placeholder='What is your date of birth?'
                            placeholderTextColor="#555555"
                        // onChangeText={(actualData) => setUserName(actualData)}
                        /> */}
                    </View>


                    {/* <SelectDropdown
                        data={Gender}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item) => {
                            return item
                        }}
                    /> */}
                </View>

                <View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 5,
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
            </View>
        </ScrollView>

    )
}

export default Profile

const styles = StyleSheet.create({})