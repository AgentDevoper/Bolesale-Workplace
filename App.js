import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Draw from './src/components/Draw';
import Categories from './src/screens/Categories';
import BankDetail from './src/screens/BankDetail';
import Profile from './src/screens/Profile';
import Account from './src/screens/Account';
import Payment from './src/screens/Payment';
import Order2 from './src/screens/Order2';
import Order from './src/screens/Order';
import Stk from './src/components/Stk';

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Draw />
      {/* <Stk /> */}
    </NavigationContainer>

    // <View>
    //   <Payment navigation={navigation} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
