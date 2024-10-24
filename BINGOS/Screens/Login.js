import {default as React} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Splash')}>
        <Image style={styles.back} source={require('../Images/left.png')} />
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <Image style={styles.logo} source={require('../Images/mingos.jpg')} />
      </View>

      <Text style={styles.style}>Welcome Back!</Text>
      <View
        style={{
          flex: 1,
          elevation: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          width: 350,
          marginTop: 10,
          marginBottom: 150,
          marginLeft: 30,
        }}>
        <View style={styles.entry}>
          <TextInput
            placeholder="USERNAME"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>

        <View style={styles.entry}>
          <TextInput
            placeholder="PASSWORD"
            style={{alignSelf: 'flex-start', marginVertical: -3}}></TextInput>
        </View>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              color: 'black',
              fontWeight: 'bold',
            }}>
            LOGIN
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
        Don't have an account? {''}
        <Text
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={{fontSize: 15, color: '#f6c52f', fontWeight: 'bold'}}>
          Create Here
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
    marginTop: 10,
    fontWeight: 'bold',
  },

  back: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginTop: 3,
  },

  logo: {
    height: 100,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
  },

  entry: {
    width: 320,
    height: 40,
    borderRadius: 30,
    alignSelf: 'center',
    backgroundColor: '#b6b3b3',
    marginTop: 30,
    borderColor: 'black',
    borderWidth: 3,
  },

  login: {
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
