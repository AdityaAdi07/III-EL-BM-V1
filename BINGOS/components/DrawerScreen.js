import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import DetailsScreen from '../Screens/DetailsScreen';
import Home from '../Screens/Home';
const DrawerScreen = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Detail" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
