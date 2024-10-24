import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate('Splash')}>
        <Image style={styles.back} source={require('../Images/menu.png')} />
      </TouchableOpacity>
      <View style={styles.preference}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            height: 70,
            width: 60,
            marginHorizontal: -10,
          }}>
          <Image
            source={require('../Images/veg.png')}
            style={{alignSelf: 'center'}}></Image>
          <Text
            style={{
              fontSize: 13,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
            }}>
            VEG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Non_Veg')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            height: 70,
            width: 60,
            marginLeft: 70,
            marginTop: -70,
          }}>
          <Image
            source={require('../Images/non-veg.png')}
            style={{alignSelf: 'center'}}></Image>
          <Text
            style={{
              fontSize: 13,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 3,
            }}>
            NON VEG{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Snacks')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/fast-food.png')}
            style={{
              height: 70,
              width: 70,
              alignSelf: 'center',
              marginTop: 10,
              marginTop: 5,
            }}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 5,
            }}>
            SNACKS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('South_Indian')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/south.png')}
            style={{height: 70, width: 70, alignSelf: 'center'}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            SOUTH INDIAN
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Chineese')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/noodles.png')}
            style={{height: 70, width: 70, alignSelf: 'center', marginTop: 5}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            CHINEESE
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Specials')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/special.png')}
            style={{height: 70, width: 70, alignSelf: 'center', marginTop: 5}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            SPECIALS
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu1}>
        <TouchableOpacity
          onPress={() => navigation.navigate('North_Indian')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/paneer.png')}
            style={{height: 65, width: 70, alignSelf: 'center', marginTop: 5}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            NORTH INDIAN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Beverages')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/mil.png')}
            style={{height: 70, width: 70, alignSelf: 'center', marginTop: 5}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            BEVERAGES
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Ice_Cream')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/ice-cream.png')}
            style={{height: 70, width: 70, alignSelf: 'center', marginTop: 5}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            ICE CREAMS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Chaats')}
          style={{
            elevation: 10,
            backgroundColor: 'white',
            height: 120,
            width: 120,
            borderRadius: 20,
            marginTop: 30,
          }}>
          <Image
            source={require('../Images/chaat.png')}
            style={{height: 70, width: 70, alignSelf: 'center', marginTop: 5}}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              marginTop: 10,
            }}>
            CHAATS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201d1d',
  },
  preference: {marginLeft: 250, marginTop: 60},
  menu: {
    marginLeft: 40,
    marginBottom: 50,
  },
  menu1: {marginLeft: 250, marginTop: -650},
  back: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: 3,
  },

  image: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
});
