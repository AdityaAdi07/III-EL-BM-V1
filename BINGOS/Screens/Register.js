import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Splash')}>
        <Image style={styles.back} source={require('../Images/left.png')} />
      </TouchableOpacity>
      <Text style={styles.style}>SIGN UP</Text>
      <View
        style={{
          flex: 1,
          elevation: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          width: 350,
          marginTop: 10,
          marginBottom: 100,
          marginLeft: 30,
        }}>
        <View style={styles.entry}>
          <TextInput
            placeholder="USERNAME"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>

        <View style={styles.entry}>
          <TextInput
            placeholder="PHONE NUMBER"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>

        <View style={styles.entry}>
          <TextInput
            placeholder="EMAIL"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>

        <View style={styles.entry}>
          <TextInput
            placeholder="PASSWORD"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>

        <View style={styles.entry}>
          <TextInput
            placeholder="CONFIRM PASSWORD"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
          marginBottom: 30,
        }}>
        Already have an account ! {''}
        <Text
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={{fontSize: 15, color: '#f6c52f', fontWeight: 'bold'}}>
          Sign in
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201d1d',
  },

  style: {
    fontSize: 30,
    textAlign: 'center',
    color: '#f6c52f',
    marginTop: 110,
    fontWeight: 'bold',
  },

  back: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginTop: 3,
  },

  entry: {
    width: 320,
    height: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#b6b3b3',
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 3,
  },

  register: {
    width: 250,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#f6c52f',
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 3,
  },
});
