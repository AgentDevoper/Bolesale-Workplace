import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Stk from './Stk';
import Sidebar from '../screens/Sidebar';

const Drawer = createDrawerNavigator();

const Draw = () => {
    return (
        <Drawer.Navigator
            initialRouteName='Main'
            screenOptions={{ headerShown: false }}
            drawerContent={props => <Sidebar {...props} />}
        >
            <Drawer.Screen name="Main" component={Stk} />
        </Drawer.Navigator>
    )
}

export default Draw

// const styles = StyleSheet.create({})