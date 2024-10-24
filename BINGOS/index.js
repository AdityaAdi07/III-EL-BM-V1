import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AppRegistry, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Chineese_N from './Screens/NonVeg_Menu/Chineese_N';
import North_Indian_N from './Screens/NonVeg_Menu/North_Indian_N';
import South_Indian_N from './Screens/NonVeg_Menu/South_Indian_N';
import Specials_N from './Screens/NonVeg_Menu/Specials_N';
import Non_Veg from './Screens/Non_Veg';
import Register from './Screens/Register';
import Splash from './Screens/Splash';
import Beverages from './Screens/Veg_Menu/Beverages';
import Chaats from './Screens/Veg_Menu/Chaats';
import Chineese from './Screens/Veg_Menu/Chineese';
import Ice_Cream from './Screens/Veg_Menu/Ice_Cream';
import North_Indian from './Screens/Veg_Menu/North_Indian';
import Snacks from './Screens/Veg_Menu/Snacks';
import South_Indian from './Screens/Veg_Menu/South_Indian';
import Specials from './Screens/Veg_Menu/Specials';
import DrawerScreen from './components/DrawerScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />

      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={DrawerScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Non_Veg"
          component={Non_Veg}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Beverages"
          component={Beverages}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chaats"
          component={Chaats}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chineese"
          component={Chineese}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ice_Cream"
          component={Ice_Cream}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="North_Indian"
          component={North_Indian}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="South_Indian"
          component={South_Indian}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Snacks"
          component={Snacks}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Specials"
          component={Specials}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chineese_N"
          component={Chineese_N}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="North_Indian_N"
          component={North_Indian_N}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="South_Indian_N"
          component={South_Indian_N}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Specials_N"
          component={Specials_N}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default App;

AppRegistry.registerComponent('BINGOS', () => App);
