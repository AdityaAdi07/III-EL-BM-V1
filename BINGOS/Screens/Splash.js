import React from 'react';
import {
  AppRegistry,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}></ImageBackground>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.hello}>MINGOS CAFE</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginBottom: 15,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default Splash;
AppRegistry.registerComponent('BINGOS', () => Splash);
