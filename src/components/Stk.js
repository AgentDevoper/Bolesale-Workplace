import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import BotNav from './BotNav';
import Categories from '../screens/Categories';
import BankDetail from '../screens/BankDetail';
import Profile from '../screens/Profile';
import Payment from '../screens/Payment';
import Order from '../screens/Order';
import Order2 from '../screens/Order2';

const Stack = createStackNavigator();

const Stk = () => {
    return (
        <Stack.Navigator initialRouteName='BotNav' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='BotNav' component={BotNav} />
            <Stack.Screen name='Categories' component={Categories} />
            <Stack.Screen name='BankDetails' component={BankDetail} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='Payment' component={Payment} />
            <Stack.Screen name='Order' component={Order} />
            <Stack.Screen name='Order2' component={Order2} />
        </Stack.Navigator>
    )
}

export default Stk

const styles = StyleSheet.create({})