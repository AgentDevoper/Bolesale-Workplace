import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCI from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons";
import Store from '../screens/Store';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();
// const color = "#fff"
const BotNav = () => {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: "black",
                // tabBarActiveTintColor: "#02738A",
                tabBarStyle: {
                    height: 60,
                    position: "absolute",
                    bottom: 20,
                    // borderRadius: 10,
                    borderBottomStartRadius: 15,
                    borderBottomEndRadius: 15,
                    marginHorizontal: 15,
                    paddingBottom: 5,
                    borderTopColor: "white",
                    backgroundColor: "#0790AD",
                }
            }}>
            <Tab.Screen name='Home' component={Home} options={{
                tabBarLabel: "",
                // showLabel: false,
                tabBarIcon: () => (
                    <Entypo name="home" color={"white"} size={26} style={{
                        marginTop: 15,
                        marginHorizontal: 10,
                    }} />
                )
            }} />
            <Tab.Screen name='Store' component={Store} options={{
                tabBarLabel: "",
                tabBarIcon: () => (
                    <MCI name="storefront" color={"white"} size={26} style={{
                        marginTop: 15,
                        marginHorizontal: 10,
                    }}
                    />
                )
            }} />

            <Tab.Screen name='Cart' component={Cart} options={{
                tabBarLabel: "",
                tabBarIcon: () => (
                    <Icon name='cart' color={"white"} size={26} style={{
                        marginTop: 15,
                        marginHorizontal: 10,
                    }}
                    />
                )
            }} />

            <Tab.Screen name='Account' component={Account} options={{
                tabBarLabel: "",
                tabBarIcon: () => (
                    <MCI name="account-circle" color={"white"} size={26} style={{
                        marginTop: 15,
                        marginHorizontal: 10,
                    }}
                    />
                )
            }} />

        </Tab.Navigator>
    )
}

export default BotNav

const styles = StyleSheet.create({})

