import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const Snacks = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Home')}>
        <Image style={styles.back} source={require('../Veg_Menu/left.png')} />
      </TouchableOpacity>
      <View style={styles.item}></View>
    </View>
  );
};

export default Snacks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201d1d',
  },

  back: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: 3,
  },
  item: {
    width: 30,
    height: 10,
    backgroundColor: 'white',
    margin: 10,
  },
});
